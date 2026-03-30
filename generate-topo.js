// Generate a large topographic contour background SVG
// matching the style of the reference Topo_map_lines.svg
//
// Key characteristics from reference:
// - Filled paths (fill="#e9e9e9"), NOT stroked lines
// - Each contour is a thin filled ribbon (two parallel paths connected)
// - Paths are irregular with angular turns, sharp bends, deep indentations
// - Paths enter from one edge and exit at another
// - Variable spacing: some areas dense (steep), some sparse (gentle)
// - Complex cubic bezier curves with many control points

const W = 3000;
const H = 6000;

// Seeded random for reproducibility
let seed = 42;
function random() {
  seed = (seed * 16807 + 0) % 2147483647;
  return (seed - 1) / 2147483646;
}

function randRange(min, max) {
  return min + random() * (max - min);
}

// Generate a center line as a series of points
// The line flows across the canvas with irregular angular character
function generateCenterLine(startX, startY, endX, endY, numPoints, noiseScale) {
  const points = [];
  for (let i = 0; i <= numPoints; i++) {
    const t = i / numPoints;
    // Base interpolation
    let x = startX + (endX - startX) * t;
    let y = startY + (endY - startY) * t;

    // Add terrain-like noise - angular, not smooth
    // Multiple octaves for organic feel
    const noise1 = Math.sin(t * 7.3 + random() * 0.5) * noiseScale * 0.6;
    const noise2 = Math.sin(t * 13.7 + random() * 0.8) * noiseScale * 0.3;
    const noise3 = (random() - 0.5) * noiseScale * 0.4; // Sharp angular noise

    // Canyon-like indentations (occasional deep cuts)
    let canyon = 0;
    if (random() < 0.15) {
      canyon = (random() - 0.5) * noiseScale * 1.5;
    }

    x += noise1 + noise2 + noise3 * 0.5 + canyon * 0.3;
    y += noise1 * 0.7 + noise2 * 0.5 + noise3 + canyon;

    points.push({ x, y });
  }
  return points;
}

// Create offset points for the ribbon (one side of the contour)
function offsetLine(points, baseWidth, variability) {
  const offset = [];
  for (let i = 0; i < points.length; i++) {
    // Variable width along the path
    const t = i / (points.length - 1);
    const widthNoise = Math.sin(t * 11.3 + random() * 3) * variability;
    const width = baseWidth + widthNoise;

    // Calculate normal direction
    let nx, ny;
    if (i === 0) {
      nx = points[1].x - points[0].x;
      ny = points[1].y - points[0].y;
    } else if (i === points.length - 1) {
      nx = points[i].x - points[i - 1].x;
      ny = points[i].y - points[i - 1].y;
    } else {
      nx = points[i + 1].x - points[i - 1].x;
      ny = points[i + 1].y - points[i - 1].y;
    }

    // Perpendicular
    const len = Math.sqrt(nx * nx + ny * ny) || 1;
    const px = -ny / len;
    const py = nx / len;

    offset.push({
      x: points[i].x + px * width,
      y: points[i].y + py * width
    });
  }
  return offset;
}

// Convert points to cubic bezier path commands
function pointsToCubicPath(points) {
  if (points.length < 2) return '';

  let d = `M ${fmt(points[0].x)} ${fmt(points[0].y)}`;

  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];

    // Generate control points for cubic bezier
    // Use neighboring points to create angular, terrain-like curves
    const dx = curr.x - prev.x;
    const dy = curr.y - prev.y;

    // Asymmetric control points for angular character
    const cp1x = prev.x + dx * (0.25 + (random() - 0.5) * 0.2);
    const cp1y = prev.y + dy * (0.3 + (random() - 0.5) * 0.3);
    const cp2x = prev.x + dx * (0.7 + (random() - 0.5) * 0.2);
    const cp2y = prev.y + dy * (0.65 + (random() - 0.5) * 0.3);

    d += ` C ${fmt(cp1x)} ${fmt(cp1y)} ${fmt(cp2x)} ${fmt(cp2y)} ${fmt(curr.x)} ${fmt(curr.y)}`;
  }

  return d;
}

function fmt(n) {
  return Number(n.toFixed(6));
}

// Build a filled contour ribbon path
function buildContourPath(startX, startY, endX, endY, numSegments, noiseScale, ribbonWidth, widthVar) {
  const centerPoints = generateCenterLine(startX, startY, endX, endY, numSegments, noiseScale);
  const side1 = offsetLine(centerPoints, ribbonWidth / 2, widthVar);
  const side2 = offsetLine(centerPoints, -ribbonWidth / 2, -widthVar);

  // Forward along side1, backward along side2, close
  const forwardPath = pointsToCubicPath(side1);
  const reversedSide2 = [...side2].reverse();

  // Line to start of reversed side
  let d = forwardPath;
  d += ` L ${fmt(reversedSide2[0].x)} ${fmt(reversedSide2[0].y)}`;

  // Add cubic bezier segments for the return path
  for (let i = 1; i < reversedSide2.length; i++) {
    const prev = reversedSide2[i - 1];
    const curr = reversedSide2[i];
    const dx = curr.x - prev.x;
    const dy = curr.y - prev.y;

    const cp1x = prev.x + dx * (0.25 + (random() - 0.5) * 0.2);
    const cp1y = prev.y + dy * (0.3 + (random() - 0.5) * 0.3);
    const cp2x = prev.x + dx * (0.7 + (random() - 0.5) * 0.2);
    const cp2y = prev.y + dy * (0.65 + (random() - 0.5) * 0.3);

    d += ` C ${fmt(cp1x)} ${fmt(cp1y)} ${fmt(cp2x)} ${fmt(cp2y)} ${fmt(curr.x)} ${fmt(curr.y)}`;
  }

  d += ' Z';
  return d;
}

// Define contour lines for the terrain
// Upper portion (0-2000): Ridge system running diagonally, tight bunching
// Middle portion (2000-4000): Valley/saddle, contours spread apart
// Lower portion (4000-6000): Foothills, moderate spacing

const contours = [];

// === UPPER RIDGE SYSTEM (dense, steep terrain) ===
// Main ridge running from upper-left toward center-right
// Tight bunching = small spacing between lines

// Group 1: Steep western face of ridge (very tight, 8 contours)
const ridgeContours = [
  // Contour 1 - outermost, long sweeping line
  { sx: -10, sy: 50,   ex: 3010, ey: 1200, segs: 55, noise: 180, width: 2.0, wvar: 0.8 },
  // Contour 2 - close to #1
  { sx: -10, sy: 120,  ex: 3010, ey: 1280, segs: 52, noise: 170, width: 1.8, wvar: 0.7 },
  // Contour 3
  { sx: -10, sy: 185,  ex: 3010, ey: 1350, segs: 48, noise: 160, width: 2.2, wvar: 0.9 },
  // Contour 4
  { sx: -10, sy: 240,  ex: 3010, ey: 1420, segs: 50, noise: 175, width: 1.6, wvar: 0.6 },
  // Contour 5 - tight cluster
  { sx: -10, sy: 300,  ex: 3010, ey: 1480, segs: 45, noise: 165, width: 2.0, wvar: 0.8 },
  // Contour 6
  { sx: -10, sy: 380,  ex: 3010, ey: 1560, segs: 53, noise: 190, width: 1.4, wvar: 0.5 },
  // Contour 7 - with deep canyon indentation
  { sx: -10, sy: 470,  ex: 3010, ey: 1660, segs: 58, noise: 220, width: 2.4, wvar: 1.0 },
  // Contour 8
  { sx: -10, sy: 580,  ex: 3010, ey: 1770, segs: 46, noise: 185, width: 1.8, wvar: 0.7 },
];

// Group 2: Eastern gentle slope (wider spacing, 4 contours)
const gentleSlope = [
  { sx: -10, sy: 750,  ex: 3010, ey: 1950, segs: 42, noise: 150, width: 1.6, wvar: 0.6 },
  { sx: -10, sy: 1000, ex: 3010, ey: 2150, segs: 40, noise: 140, width: 2.0, wvar: 0.8 },
  { sx: -10, sy: 1300, ex: 3010, ey: 2400, segs: 38, noise: 130, width: 1.4, wvar: 0.5 },
  { sx: -10, sy: 1650, ex: 3010, ey: 2700, segs: 44, noise: 160, width: 1.8, wvar: 0.7 },
];

// === MIDDLE VALLEY/SADDLE (sparse, wide spacing) ===
// Contours spread far apart in the valley
const valleyContours = [
  { sx: -10, sy: 2100, ex: 3010, ey: 3100, segs: 50, noise: 200, width: 2.2, wvar: 0.9 },
  { sx: -10, sy: 2700, ex: 3010, ey: 3500, segs: 46, noise: 180, width: 1.6, wvar: 0.6 },
  { sx: -10, sy: 3200, ex: 3010, ey: 3850, segs: 42, noise: 170, width: 2.0, wvar: 0.8 },
];

// === LOWER FOOTHILLS (moderate spacing, secondary ridge) ===
// A smaller ridge system with moderate contour density
const foothillContours = [
  // Tighter cluster for secondary ridge
  { sx: -10, sy: 3600, ex: 3010, ey: 4200, segs: 48, noise: 190, width: 2.0, wvar: 0.8 },
  { sx: -10, sy: 3750, ex: 3010, ey: 4350, segs: 44, noise: 175, width: 1.8, wvar: 0.7 },
  { sx: -10, sy: 3920, ex: 3010, ey: 4520, segs: 50, noise: 200, width: 2.4, wvar: 1.0 },
  { sx: -10, sy: 4100, ex: 3010, ey: 4700, segs: 46, noise: 165, width: 1.6, wvar: 0.6 },
  // Gentle lower slopes fading out
  { sx: -10, sy: 4400, ex: 3010, ey: 5000, segs: 38, noise: 140, width: 1.4, wvar: 0.5 },
  { sx: -10, sy: 4800, ex: 3010, ey: 5350, segs: 36, noise: 130, width: 1.8, wvar: 0.7 },
  { sx: -10, sy: 5300, ex: 3010, ey: 5800, segs: 34, noise: 120, width: 1.6, wvar: 0.6 },
];

// Some diagonal/crossing contours for terrain complexity
const crossContours = [
  // A contour entering from top edge, exiting right
  { sx: 800,  sy: -10, ex: 3010, ey: 900,  segs: 40, noise: 160, width: 1.8, wvar: 0.7 },
  // A contour entering from left, exiting bottom
  { sx: -10,  sy: 4900, ex: 1800, ey: 6010, segs: 38, noise: 150, width: 2.0, wvar: 0.8 },
];

const allContours = [
  ...ridgeContours,
  ...gentleSlope,
  ...valleyContours,
  ...foothillContours,
  ...crossContours
];

// Generate SVG
let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="3000" viewBox="0 0 3000 6000" height="6000" preserveAspectRatio="xMidYMid meet" version="1.0">`;

for (const c of allContours) {
  const pathData = buildContourPath(c.sx, c.sy, c.ex, c.ey, c.segs, c.noise, c.width, c.wvar);
  svg += `<path fill="#e9e9e9" d="${pathData}" fill-opacity="1" fill-rule="evenodd"/>`;
}

svg += `</svg>`;

process.stdout.write(svg);

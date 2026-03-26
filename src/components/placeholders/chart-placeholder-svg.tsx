export function ChartPlaceholderSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Analytics chart preview"
    >
      {/* Background */}
      <rect width="800" height="300" rx="12" fill="#0F172A" />

      {/* Y-axis labels */}
      <text x="30" y="60" fill="#64748B" fontSize="10" fontFamily="var(--font-mono), monospace">100%</text>
      <text x="38" y="120" fill="#64748B" fontSize="10" fontFamily="var(--font-mono), monospace">75%</text>
      <text x="38" y="180" fill="#64748B" fontSize="10" fontFamily="var(--font-mono), monospace">50%</text>
      <text x="38" y="240" fill="#64748B" fontSize="10" fontFamily="var(--font-mono), monospace">25%</text>

      {/* Grid lines */}
      <line x1="70" y1="55" x2="760" y2="55" stroke="#1E293B" strokeWidth="1" />
      <line x1="70" y1="115" x2="760" y2="115" stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="70" y1="175" x2="760" y2="175" stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="70" y1="235" x2="760" y2="235" stroke="#1E293B" strokeWidth="1" />

      {/* Target line (dotted gold) */}
      <line x1="70" y1="145" x2="760" y2="145" stroke="#D4A853" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.6" />
      <rect x="715" y="136" width="48" height="16" rx="4" fill="#D4A853" opacity="0.15" />
      <text x="739" y="148" fill="#D4A853" fontSize="8" fontFamily="var(--font-mono), monospace" textAnchor="middle">TARGET</text>

      {/* Area fill under the main line */}
      <path
        d="M70,200 C140,195 210,180 280,165 C350,150 420,135 490,125 C560,115 630,105 700,95 L760,88 L760,235 L70,235 Z"
        fill="url(#blueGradient)"
      />

      {/* Main trend line (blue) */}
      <path
        d="M70,200 C140,195 210,180 280,165 C350,150 420,135 490,125 C560,115 630,105 700,95 L760,88"
        stroke="#4E8AE6"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Data points */}
      <circle cx="70" cy="200" r="4" fill="#4E8AE6" />
      <circle cx="280" cy="165" r="4" fill="#4E8AE6" />
      <circle cx="490" cy="125" r="4" fill="#4E8AE6" />
      <circle cx="700" cy="95" r="4" fill="#4E8AE6" />
      <circle cx="700" cy="95" r="8" fill="#4E8AE6" opacity="0.2" />

      {/* Tooltip on last point */}
      <rect x="660" y="62" width="72" height="26" rx="6" fill="#1E293B" stroke="#4E8AE6" strokeWidth="1" />
      <text x="696" y="79" fill="#FFFFFF" fontSize="11" fontFamily="var(--font-mono), monospace" fontWeight="500" textAnchor="middle">-12.4%</text>

      {/* Legend */}
      <rect x="70" y="258" width="8" height="8" rx="2" fill="#4E8AE6" />
      <text x="84" y="266" fill="#94A3B8" fontSize="10" fontFamily="var(--font-sans), sans-serif">Prime Cost %</text>
      <rect x="180" y="258" width="8" height="8" rx="2" fill="#D4A853" />
      <text x="194" y="266" fill="#94A3B8" fontSize="10" fontFamily="var(--font-sans), sans-serif">Target</text>

      <defs>
        <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4E8AE6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#4E8AE6" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

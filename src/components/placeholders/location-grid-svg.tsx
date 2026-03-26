export function LocationGridSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Location intelligence grid preview"
    >
      {/* Background */}
      <rect width="800" height="320" rx="12" fill="#0F172A" />

      {/* Header row */}
      <rect x="20" y="20" width="760" height="36" rx="6" fill="#1E293B" />
      <text x="40" y="43" fill="#64748B" fontSize="10" fontFamily="var(--font-mono), monospace" fontWeight="500">LOCATION</text>
      <text x="240" y="43" fill="#64748B" fontSize="10" fontFamily="var(--font-mono), monospace" fontWeight="500">REVENUE</text>
      <text x="360" y="43" fill="#64748B" fontSize="10" fontFamily="var(--font-mono), monospace" fontWeight="500">PRIME COST</text>
      <text x="490" y="43" fill="#64748B" fontSize="10" fontFamily="var(--font-mono), monospace" fontWeight="500">TREND</text>
      <text x="620" y="43" fill="#64748B" fontSize="10" fontFamily="var(--font-mono), monospace" fontWeight="500">HEALTH</text>

      {/* Row 1 — green/healthy */}
      <rect x="20" y="64" width="760" height="48" rx="4" fill="#0F172A" />
      <circle cx="40" cy="88" r="8" fill="#3EBE7A" opacity="0.2" />
      <rect x="56" y="82" width="120" height="6" rx="3" fill="#CBD5E1" />
      <rect x="56" y="94" width="60" height="5" rx="2.5" fill="#64748B" />
      <rect x="240" y="82" width="70" height="8" rx="4" fill="#E2E8F0" />
      <rect x="360" y="82" width="60" height="8" rx="4" fill="#3EBE7A" opacity="0.2" />
      <text x="368" y="91" fill="#3EBE7A" fontSize="10" fontFamily="var(--font-mono), monospace">62.1%</text>
      {/* Mini sparkline */}
      <polyline points="490,96 510,92 530,88 550,84 570,80" stroke="#3EBE7A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Health bar */}
      <rect x="620" y="84" width="100" height="8" rx="4" fill="#1E293B" />
      <rect x="620" y="84" width="88" height="8" rx="4" fill="#3EBE7A" />

      {/* Row 2 — blue/normal */}
      <rect x="20" y="120" width="760" height="48" rx="4" fill="#141B2D" />
      <circle cx="40" cy="144" r="8" fill="#4E8AE6" opacity="0.2" />
      <rect x="56" y="138" width="100" height="6" rx="3" fill="#CBD5E1" />
      <rect x="56" y="150" width="55" height="5" rx="2.5" fill="#64748B" />
      <rect x="240" y="138" width="65" height="8" rx="4" fill="#E2E8F0" />
      <rect x="360" y="138" width="60" height="8" rx="4" fill="#4E8AE6" opacity="0.2" />
      <text x="368" y="147" fill="#4E8AE6" fontSize="10" fontFamily="var(--font-mono), monospace">64.8%</text>
      <polyline points="490,148 510,146 530,144 550,146 570,142" stroke="#4E8AE6" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <rect x="620" y="140" width="100" height="8" rx="4" fill="#1E293B" />
      <rect x="620" y="140" width="72" height="8" rx="4" fill="#4E8AE6" />

      {/* Row 3 — gold/warning */}
      <rect x="20" y="176" width="760" height="48" rx="4" fill="#0F172A" />
      <circle cx="40" cy="200" r="8" fill="#D4A853" opacity="0.2" />
      <rect x="56" y="194" width="130" height="6" rx="3" fill="#CBD5E1" />
      <rect x="56" y="206" width="70" height="5" rx="2.5" fill="#64748B" />
      <rect x="240" y="194" width="60" height="8" rx="4" fill="#E2E8F0" />
      <rect x="360" y="194" width="60" height="8" rx="4" fill="#D4A853" opacity="0.2" />
      <text x="368" y="203" fill="#D4A853" fontSize="10" fontFamily="var(--font-mono), monospace">68.2%</text>
      <polyline points="490,196 510,198 530,202 550,206 570,210" stroke="#D4A853" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <rect x="620" y="196" width="100" height="8" rx="4" fill="#1E293B" />
      <rect x="620" y="196" width="52" height="8" rx="4" fill="#D4A853" />

      {/* Row 4 — red/attention */}
      <rect x="20" y="232" width="760" height="48" rx="4" fill="#141B2D" />
      <circle cx="40" cy="256" r="8" fill="#E88B5C" opacity="0.2" />
      <rect x="56" y="250" width="110" height="6" rx="3" fill="#CBD5E1" />
      <rect x="56" y="262" width="65" height="5" rx="2.5" fill="#64748B" />
      <rect x="240" y="250" width="55" height="8" rx="4" fill="#E2E8F0" />
      <rect x="360" y="250" width="60" height="8" rx="4" fill="#E88B5C" opacity="0.2" />
      <text x="368" y="259" fill="#E88B5C" fontSize="10" fontFamily="var(--font-mono), monospace">73.1%</text>
      <polyline points="490,248 510,252 530,258 550,264 570,270" stroke="#E88B5C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <rect x="620" y="252" width="100" height="8" rx="4" fill="#1E293B" />
      <rect x="620" y="252" width="32" height="8" rx="4" fill="#E88B5C" />

      {/* Footer */}
      <rect x="20" y="292" width="100" height="16" rx="4" fill="#1E293B" />
      <text x="36" y="304" fill="#64748B" fontSize="9" fontFamily="var(--font-mono), monospace">4 of 12 locations</text>
    </svg>
  )
}

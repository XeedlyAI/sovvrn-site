export function CommandCenterSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Command Center dashboard preview"
    >
      {/* Background */}
      <rect width="800" height="400" rx="12" fill="#0F172A" />

      {/* Left panel — signal list */}
      <rect x="20" y="20" width="220" height="360" rx="8" fill="#1E293B" />
      <rect x="32" y="36" width="80" height="8" rx="4" fill="#64748B" />
      {/* Signal items */}
      <rect x="32" y="60" width="196" height="44" rx="6" fill="#0F172A" />
      <rect x="44" y="72" width="120" height="6" rx="3" fill="#CBD5E1" />
      <rect x="44" y="84" width="80" height="5" rx="2.5" fill="#64748B" />
      <circle cx="192" cy="82" r="6" fill="#4E8AE6" />

      <rect x="32" y="112" width="196" height="44" rx="6" fill="#4E8AE6" opacity="0.15" />
      <rect x="36" y="112" width="3" height="44" rx="1.5" fill="#4E8AE6" />
      <rect x="44" y="124" width="140" height="6" rx="3" fill="#FFFFFF" />
      <rect x="44" y="136" width="90" height="5" rx="2.5" fill="#94A3B8" />

      <rect x="32" y="164" width="196" height="44" rx="6" fill="#0F172A" />
      <rect x="44" y="176" width="100" height="6" rx="3" fill="#CBD5E1" />
      <rect x="44" y="188" width="70" height="5" rx="2.5" fill="#64748B" />
      <circle cx="192" cy="186" r="6" fill="#D4A853" />

      <rect x="32" y="216" width="196" height="44" rx="6" fill="#0F172A" />
      <rect x="44" y="228" width="130" height="6" rx="3" fill="#CBD5E1" />
      <rect x="44" y="240" width="85" height="5" rx="2.5" fill="#64748B" />

      <rect x="32" y="268" width="196" height="44" rx="6" fill="#0F172A" />
      <rect x="44" y="280" width="110" height="6" rx="3" fill="#CBD5E1" />
      <rect x="44" y="292" width="75" height="5" rx="2.5" fill="#64748B" />

      {/* Center panel — AI analysis */}
      <rect x="252" y="20" width="340" height="360" rx="8" fill="#1E293B" />
      <rect x="268" y="36" width="60" height="8" rx="4" fill="#4E8AE6" />
      <rect x="268" y="56" width="200" height="10" rx="5" fill="#E2E8F0" />
      <rect x="268" y="76" width="300" height="6" rx="3" fill="#94A3B8" />
      <rect x="268" y="90" width="280" height="6" rx="3" fill="#94A3B8" />
      <rect x="268" y="104" width="240" height="6" rx="3" fill="#94A3B8" />

      {/* Chart area */}
      <rect x="268" y="130" width="308" height="140" rx="6" fill="#0F172A" />
      <line x1="290" y1="250" x2="554" y2="250" stroke="#1E293B" strokeWidth="1" />
      <line x1="290" y1="220" x2="554" y2="220" stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="290" y1="190" x2="554" y2="190" stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4" />
      <polyline
        points="290,240 330,235 370,225 410,210 450,195 490,180 530,165"
        stroke="#4E8AE6"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="290,230 330,228 370,222 410,218 450,220 490,215 530,212"
        stroke="#D4A853"
        strokeWidth="2"
        fill="none"
        strokeDasharray="6 4"
        strokeLinecap="round"
      />

      {/* Bottom text lines */}
      <rect x="268" y="290" width="160" height="7" rx="3.5" fill="#CBD5E1" />
      <rect x="268" y="306" width="280" height="5" rx="2.5" fill="#64748B" />
      <rect x="268" y="320" width="250" height="5" rx="2.5" fill="#64748B" />
      <rect x="268" y="346" width="100" height="24" rx="6" fill="#4E8AE6" opacity="0.2" />
      <rect x="280" y="354" width="76" height="8" rx="4" fill="#4E8AE6" />

      {/* Right panel — actions */}
      <rect x="604" y="20" width="176" height="360" rx="8" fill="#1E293B" />
      <rect x="616" y="36" width="70" height="8" rx="4" fill="#64748B" />

      <rect x="616" y="60" width="152" height="60" rx="6" fill="#0F172A" />
      <rect x="628" y="72" width="100" height="6" rx="3" fill="#CBD5E1" />
      <rect x="628" y="86" width="80" height="5" rx="2.5" fill="#64748B" />
      <rect x="628" y="100" width="50" height="12" rx="4" fill="#3EBE7A" opacity="0.3" />

      <rect x="616" y="128" width="152" height="60" rx="6" fill="#0F172A" />
      <rect x="628" y="140" width="110" height="6" rx="3" fill="#CBD5E1" />
      <rect x="628" y="154" width="90" height="5" rx="2.5" fill="#64748B" />
      <rect x="628" y="168" width="50" height="12" rx="4" fill="#4E8AE6" opacity="0.3" />

      <rect x="616" y="196" width="152" height="60" rx="6" fill="#0F172A" />
      <rect x="628" y="208" width="95" height="6" rx="3" fill="#CBD5E1" />
      <rect x="628" y="222" width="75" height="5" rx="2.5" fill="#64748B" />
      <rect x="628" y="236" width="50" height="12" rx="4" fill="#D4A853" opacity="0.3" />
    </svg>
  )
}

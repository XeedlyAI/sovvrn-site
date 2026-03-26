export function MorningBriefingSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Morning Briefing SMS preview"
    >
      {/* Phone outline */}
      <rect x="10" y="10" width="300" height="500" rx="36" fill="#0F172A" stroke="#1E293B" strokeWidth="2" />
      {/* Screen area */}
      <rect x="22" y="50" width="276" height="420" rx="4" fill="#141B2D" />
      {/* Notch */}
      <rect x="110" y="18" width="100" height="24" rx="12" fill="#141B2D" />
      {/* Time */}
      <text x="40" y="42" fill="#CBD5E1" fontSize="14" fontFamily="var(--font-mono), monospace" fontWeight="500">7:02 AM</text>
      {/* Header bar */}
      <rect x="22" y="50" width="276" height="40" rx="4" fill="#1E293B" />
      <circle cx="48" cy="70" r="14" fill="#4E8AE6" opacity="0.3" />
      <text x="48" y="74" fill="#4E8AE6" fontSize="12" fontFamily="var(--font-sans), sans-serif" fontWeight="600" textAnchor="middle">S</text>
      <text x="72" y="66" fill="#FFFFFF" fontSize="13" fontFamily="var(--font-sans), sans-serif" fontWeight="600">Sovvrn</text>
      <text x="72" y="80" fill="#64748B" fontSize="10" fontFamily="var(--font-sans), sans-serif">Morning Briefing</text>

      {/* Message bubble 1 — greeting */}
      <rect x="34" y="104" width="230" height="50" rx="12" fill="#1E293B" />
      <rect x="48" y="116" width="160" height="6" rx="3" fill="#CBD5E1" />
      <rect x="48" y="128" width="120" height="6" rx="3" fill="#64748B" />

      {/* Message bubble 2 — highlighted/blue (the key insight) */}
      <rect x="34" y="166" width="240" height="90" rx="12" fill="#4E8AE6" opacity="0.15" />
      <rect x="34" y="166" width="4" height="90" rx="2" fill="#4E8AE6" />
      <rect x="48" y="178" width="100" height="7" rx="3.5" fill="#4E8AE6" />
      <rect x="48" y="194" width="200" height="5" rx="2.5" fill="#CBD5E1" />
      <rect x="48" y="206" width="180" height="5" rx="2.5" fill="#CBD5E1" />
      <rect x="48" y="218" width="150" height="5" rx="2.5" fill="#94A3B8" />
      <rect x="48" y="236" width="60" height="12" rx="4" fill="#D4A853" opacity="0.3" />
      <text x="56" y="245" fill="#D4A853" fontSize="8" fontFamily="var(--font-mono), monospace" fontWeight="500">+18% rev</text>

      {/* Message bubble 3 — alert */}
      <rect x="34" y="270" width="230" height="70" rx="12" fill="#1E293B" />
      <rect x="48" y="282" width="80" height="6" rx="3" fill="#E88B5C" />
      <rect x="48" y="296" width="190" height="5" rx="2.5" fill="#CBD5E1" />
      <rect x="48" y="308" width="160" height="5" rx="2.5" fill="#94A3B8" />
      <rect x="48" y="322" width="50" height="10" rx="3" fill="#E88B5C" opacity="0.2" />

      {/* Message bubble 4 — action items */}
      <rect x="34" y="352" width="230" height="56" rx="12" fill="#1E293B" />
      <rect x="48" y="364" width="90" height="6" rx="3" fill="#3EBE7A" />
      <rect x="48" y="378" width="180" height="5" rx="2.5" fill="#CBD5E1" />
      <rect x="48" y="390" width="140" height="5" rx="2.5" fill="#94A3B8" />

      {/* Reply field */}
      <rect x="34" y="424" width="196" height="36" rx="18" fill="#1E293B" stroke="#2D3748" strokeWidth="1" />
      <text x="52" y="446" fill="#64748B" fontSize="11" fontFamily="var(--font-sans), sans-serif">Reply to dig deeper...</text>
      <circle cx="262" cy="442" r="16" fill="#4E8AE6" />
      <path d="M256 442 L262 436 L268 442 M262 436 L262 448" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Home indicator */}
      <rect x="120" y="486" width="80" height="4" rx="2" fill="#64748B" />
    </svg>
  )
}

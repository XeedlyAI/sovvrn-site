export function VoiceAiSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Voice AI call interface preview"
    >
      {/* Background */}
      <rect width="400" height="400" rx="12" fill="#0F172A" />

      {/* Avatar circle */}
      <circle cx="200" cy="120" r="48" fill="#1E293B" />
      <circle cx="200" cy="120" r="48" stroke="#4E8AE6" strokeWidth="2" opacity="0.4" />
      <circle cx="200" cy="120" r="56" stroke="#4E8AE6" strokeWidth="1" opacity="0.15" />
      <circle cx="200" cy="120" r="64" stroke="#4E8AE6" strokeWidth="1" opacity="0.08" />
      {/* AI icon inside */}
      <circle cx="200" cy="108" r="12" fill="#4E8AE6" opacity="0.3" />
      <rect x="188" y="124" width="24" height="16" rx="8" fill="#4E8AE6" opacity="0.3" />

      {/* "Sovvrn Voice AI" label */}
      <rect x="148" y="184" width="104" height="10" rx="5" fill="#FFFFFF" />
      <rect x="160" y="200" width="80" height="6" rx="3" fill="#64748B" />

      {/* Audio waveform visualization */}
      <g transform="translate(100, 230)">
        {/* Waveform bars */}
        <rect x="0" y="20" width="4" height="12" rx="2" fill="#4E8AE6" opacity="0.4" />
        <rect x="10" y="14" width="4" height="24" rx="2" fill="#4E8AE6" opacity="0.5" />
        <rect x="20" y="8" width="4" height="36" rx="2" fill="#4E8AE6" opacity="0.7" />
        <rect x="30" y="4" width="4" height="44" rx="2" fill="#4E8AE6" opacity="0.9" />
        <rect x="40" y="0" width="4" height="52" rx="2" fill="#4E8AE6" />
        <rect x="50" y="6" width="4" height="40" rx="2" fill="#4E8AE6" opacity="0.85" />
        <rect x="60" y="2" width="4" height="48" rx="2" fill="#4E8AE6" opacity="0.95" />
        <rect x="70" y="8" width="4" height="36" rx="2" fill="#4E8AE6" opacity="0.7" />
        <rect x="80" y="4" width="4" height="44" rx="2" fill="#4E8AE6" opacity="0.9" />
        <rect x="90" y="10" width="4" height="32" rx="2" fill="#4E8AE6" opacity="0.6" />
        <rect x="100" y="6" width="4" height="40" rx="2" fill="#4E8AE6" opacity="0.85" />
        <rect x="110" y="0" width="4" height="52" rx="2" fill="#4E8AE6" />
        <rect x="120" y="4" width="4" height="44" rx="2" fill="#4E8AE6" opacity="0.9" />
        <rect x="130" y="10" width="4" height="32" rx="2" fill="#4E8AE6" opacity="0.6" />
        <rect x="140" y="6" width="4" height="40" rx="2" fill="#4E8AE6" opacity="0.85" />
        <rect x="150" y="14" width="4" height="24" rx="2" fill="#4E8AE6" opacity="0.5" />
        <rect x="160" y="8" width="4" height="36" rx="2" fill="#4E8AE6" opacity="0.7" />
        <rect x="170" y="12" width="4" height="28" rx="2" fill="#4E8AE6" opacity="0.55" />
        <rect x="180" y="16" width="4" height="20" rx="2" fill="#4E8AE6" opacity="0.45" />
        <rect x="190" y="20" width="4" height="12" rx="2" fill="#4E8AE6" opacity="0.3" />
      </g>

      {/* Call duration */}
      <rect x="168" y="296" width="64" height="20" rx="10" fill="#1E293B" />
      <text x="200" y="310" fill="#3EBE7A" fontSize="11" fontFamily="var(--font-mono), monospace" fontWeight="500" textAnchor="middle">02:34</text>

      {/* Transcript preview */}
      <rect x="80" y="330" width="240" height="44" rx="8" fill="#1E293B" />
      <rect x="96" y="342" width="160" height="5" rx="2.5" fill="#CBD5E1" />
      <rect x="96" y="354" width="120" height="5" rx="2.5" fill="#64748B" />

      {/* Status indicator */}
      <circle cx="88" cy="350" r="4" fill="#3EBE7A" />
    </svg>
  )
}

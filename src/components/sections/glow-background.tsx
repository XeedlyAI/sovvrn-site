'use client'

export function GlowBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 0,
          background:
            'radial-gradient(ellipse 800px 600px at 70% 50%, rgba(56, 182, 255, 0.20), transparent 70%), radial-gradient(ellipse 600px 500px at 20% 40%, rgba(78, 138, 230, 0.15), transparent 70%), radial-gradient(ellipse 400px 400px at 50% 90%, rgba(212, 168, 83, 0.08), transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 0,
          backgroundImage:
            'radial-gradient(circle 1px at center, rgba(255, 255, 255, 0.12) 0%, transparent 100%)',
          backgroundSize: '32px 32px',
        }}
      />
    </>
  )
}

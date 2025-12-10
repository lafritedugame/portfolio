import React, { useMemo } from 'react'

const ROSE_COUNT = 12
const between = (min, max) => min + Math.random() * (max - min)

export default function FloatingRoses() {
  const roses = useMemo(
    () =>
      Array.from({ length: ROSE_COUNT }, (_, idx) => {
        const scale = between(0.55, 1.05)
        return {
          id: idx,
          x: between(-10, 110),
          drift: between(-4, 4),
          scale,
          rotate: between(-40, 80),
          duration: between(14, 26),
          delay: -between(0, 8),
          blur: Math.max(0, 6 - scale * 4 + idx * 0.15),
          opacity: between(0.45, 0.72),
          size: between(120, 210) * scale
        }
      }),
    []
  )

  return (
    <div className="rose-field" aria-hidden="true">
      {roses.map((rose) => (
        <img
          key={rose.id}
          src="/rose_no_bg.svg"
          alt=""
          className="rose"
          style={{
            left: `${rose.x}vw`,
            width: `${rose.size}px`,
            animationDuration: `${rose.duration}s`,
            animationDelay: `${rose.delay}s`,
            '--scale': rose.scale,
            '--rotate': `${rose.rotate}deg`,
            '--drift': `${rose.drift}vw`,
            '--opacity': rose.opacity,
            filter: `blur(${rose.blur}px)`,
            opacity: rose.opacity
          }}
        />
      ))}
    </div>
  )
}

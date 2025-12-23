import React, { useEffect, useRef } from 'react'

export default function FloatingSVGLayer() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const svgElements = container.querySelectorAll('.floating-svg')
    const animationRef = useRef(null)

    const handleFloat = () => {
      const time = Date.now() * 0.0003

      svgElements.forEach((el, i) => {
        const speed = 0.5 + i * 0.1
        const offsetX = Math.sin(time * speed) * 30
        const offsetY = Math.cos(time * speed * 0.7) * 40
        const rotation = time * 10

        el.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${rotation}deg)`
      })

      animationRef.current = requestAnimationFrame(handleFloat)
    }

    animationRef.current = requestAnimationFrame(handleFloat)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="floating-svg-layer">
      {/* SVG elements positioned at different spots */}
      <div className="floating-svg" style={{ top: '10%', left: '5%' }}>
        <img src={`${import.meta.env.BASE_URL}rose_no_bg.svg`} alt="rose" />
      </div>
      <div className="floating-svg" style={{ top: '20%', right: '8%' }}>
        <img src={`${import.meta.env.BASE_URL}rose_no_bg.svg`} alt="rose" />
      </div>
      <div className="floating-svg" style={{ bottom: '15%', left: '12%' }}>
        <img src={`${import.meta.env.BASE_URL}rose_no_bg.svg`} alt="rose" />
      </div>
      <div className="floating-svg" style={{ bottom: '10%', right: '5%' }}>
        <img src={`${import.meta.env.BASE_URL}rose_no_bg.svg`} alt="rose" />
      </div>
      <div className="floating-svg" style={{ top: '50%', left: '8%' }}>
        <img src={`${import.meta.env.BASE_URL}rose_no_bg.svg`} alt="rose" />
      </div>
      <div className="floating-svg" style={{ top: '60%', right: '10%' }}>
        <img src={`${import.meta.env.BASE_URL}rose_no_bg.svg`} alt="rose" />
      </div>
    </div>
  )
}

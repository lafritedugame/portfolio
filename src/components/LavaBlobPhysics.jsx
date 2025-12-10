import React, { useEffect, useRef } from 'react'

export default function LavaBlobPhysics() {
  const blobsRef = useRef([])
  const animationRef = useRef(null)

  // Blob sizes (matching CSS)
  const blobSizes = [
    180, 220, 160, 200, 140, 190, 170, 210, 175, 195,
    155, 205, 165, 185, 215, 150, 200, 170, 190, 180,
    195, 165, 210, 175, 185, 155, 200, 170
  ]

  useEffect(() => {
    // Wait a tick to ensure DOM is ready
    const timer = setTimeout(() => {
      const container = document.querySelector('.lava-bg')
      if (!container) return

      const width = window.innerWidth
      const height = window.innerHeight

      // Initialize blob data
      const blobs = blobSizes.map((size, i) => {
        const element = container.querySelector(`.blob-${i + 1}`)
        return {
          id: i,
          x: Math.random() * (width - size),
          y: Math.random() * (height - size),
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size,
          element
        }
      })

      blobsRef.current = blobs

      const handlePhysics = () => {
        const blobs = blobsRef.current

        // Update positions
        blobs.forEach((blob) => {
          blob.x += blob.vx * 0.6
          blob.y += blob.vy * 0.6

          // Bounce off walls
          const margin = 20
          if (blob.x <= margin) {
            blob.x = margin
            blob.vx = Math.abs(blob.vx) * 0.85
          }
          if (blob.x + blob.size >= width - margin) {
            blob.x = width - blob.size - margin
            blob.vx = -Math.abs(blob.vx) * 0.85
          }
          if (blob.y <= margin) {
            blob.y = margin
            blob.vy = Math.abs(blob.vy) * 0.85
          }
          if (blob.y + blob.size >= height - margin) {
            blob.y = height - blob.size - margin
            blob.vy = -Math.abs(blob.vy) * 0.85
          }
        })

        // Check collisions
        for (let i = 0; i < blobs.length; i++) {
          for (let j = i + 1; j < blobs.length; j++) {
            const blob1 = blobs[i]
            const blob2 = blobs[j]

            // Get centers
            const c1x = blob1.x + blob1.size / 2
            const c1y = blob1.y + blob1.size / 2
            const c2x = blob2.x + blob2.size / 2
            const c2y = blob2.y + blob2.size / 2

            const dx = c2x - c1x
            const dy = c2y - c1y
            const distance = Math.sqrt(dx * dx + dy * dy)
            const minDistance = (blob1.size + blob2.size) / 2

            if (distance < minDistance) {
              // Collision detected - push apart
              const angle = Math.atan2(dy, dx)
              const overlap = minDistance - distance
              const pushX = (overlap / 2) * Math.cos(angle)
              const pushY = (overlap / 2) * Math.sin(angle)

              blob1.x -= pushX
              blob1.y -= pushY
              blob2.x += pushX
              blob2.y += pushY

              // Exchange velocities (bouncing effect)
              const tempVx = blob1.vx
              const tempVy = blob1.vy

              blob1.vx = blob2.vx * 0.92
              blob1.vy = blob2.vy * 0.92
              blob2.vx = tempVx * 0.92
              blob2.vy = tempVy * 0.92

              // Add moderate repulsion
              blob1.vx -= Math.cos(angle) * 0.7
              blob1.vy -= Math.sin(angle) * 0.7
              blob2.vx += Math.cos(angle) * 0.7
              blob2.vy += Math.sin(angle) * 0.7
            }
          }
        }

        // Apply minimal gravity and low drag to keep movement
        blobs.forEach((blob) => {
          blob.vy += 0.08 // slight gravity
          blob.vx *= 0.988 // gentle drag
          blob.vy *= 0.988 // gentle drag
          
          // Very occasional, subtle perturbation to prevent settling
          if (Math.random() > 0.98) {
            blob.vx += (Math.random() - 0.5) * 0.15
            blob.vy += (Math.random() - 0.5) * 0.15
          }
        })

        // Update DOM
        blobs.forEach((blob) => {
          if (blob.element) {
            blob.element.style.left = blob.x + 'px'
            blob.element.style.top = blob.y + 'px'
          }
        })

        animationRef.current = requestAnimationFrame(handlePhysics)
      }

      animationRef.current = requestAnimationFrame(handlePhysics)

      // Handle window resize
      const handleResize = () => {
        const newWidth = window.innerWidth
        const newHeight = window.innerHeight

        blobs.forEach((blob) => {
          if (blob.x + blob.size > newWidth) {
            blob.x = newWidth - blob.size - 20
          }
          if (blob.y + blob.size > newHeight) {
            blob.y = newHeight - blob.size - 20
          }
        })
      }

      window.addEventListener('resize', handleResize)

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
        window.removeEventListener('resize', handleResize)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return null
}

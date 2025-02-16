'use client'

import React, { useEffect, useRef } from 'react'

export default function Live2DViewer() {
  const leftCanvasRef = useRef<HTMLCanvasElement>(null)
  const rightCanvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => resolve()
        script.onerror = () => reject()
        document.head.appendChild(script)
      })
    }

    const loadAllScripts = async () => {
      try {
        console.log('Loading Live2D scripts...')
        await loadScript('https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js')
        await loadScript('https://cdn.jsdelivr.net/gh/dylanNew/live2d/webgl/Live2D/lib/live2d.min.js')
        await loadScript('https://cdn.jsdelivr.net/npm/pixi.js@5.3.6/dist/pixi.min.js')
        await loadScript('https://cdn.jsdelivr.net/npm/pixi-live2d-display/dist/index.min.js')
        console.log('Scripts loaded successfully')
        initLive2D()
      } catch (error) {
        console.error('Failed to load Live2D scripts:', error)
      }
    }

    const initLive2D = async () => {
      try {
        console.log('Initializing Live2D...')

        // Initialize Homura (Left side) with larger canvas
        const homuraApp = new PIXI.Application({
          view: leftCanvasRef.current,
          autoStart: true,
          width: 1200,  // Increased canvas width
          height: 800,  // Increased canvas height
          transparent: true,
          backgroundAlpha: 0
        })

        const homuraModel = await PIXI.live2d.Live2DModel.from('/homura/model.json')
        console.log('Homura model loaded successfully')

        homuraApp.stage.addChild(homuraModel)

        // Moved Homura further left
        homuraModel.x = 50
        homuraModel.y = 400
        homuraModel.scale.set(0.35)
        homuraModel.interactive = true
        homuraModel.buttonMode = true

        // Initialize Madoka (Right side) with larger canvas
        const madokaApp = new PIXI.Application({
          view: rightCanvasRef.current,
          autoStart: true,
          width: 1200,  // Increased canvas width
          height: 800,  // Increased canvas height
          transparent: true,
          backgroundAlpha: 0
        })

        const madokaModel = await PIXI.live2d.Live2DModel.from('/madoka/model.json')
        console.log('Madoka model loaded successfully')

        madokaApp.stage.addChild(madokaModel)

        madokaModel.x = 250
        madokaModel.y = 400
        madokaModel.scale.set(0.35)
        madokaModel.interactive = true
        madokaModel.buttonMode = true

        // Add dragging functionality with boundary checks
        const setupDragging = (model: any, app: any) => {
          let isDragging = false
          let dragData: any = null

          model.on('mousedown', (event: any) => {
            isDragging = true
            dragData = event.data
          })

          model.on('mousemove', (event: any) => {
            if (isDragging) {
              const newPosition = dragData.getLocalPosition(model.parent)
              // Add boundary checks with wider margins
              model.x = Math.max(0, Math.min(newPosition.x, app.screen.width))
              model.y = Math.max(0, Math.min(newPosition.y, app.screen.height))
            }
          })

          model.on('mouseup', () => {
            isDragging = false
            dragData = null
          })

          model.on('mouseupoutside', () => {
            isDragging = false
            dragData = null
          })
        }

        setupDragging(homuraModel, homuraApp)
        setupDragging(madokaModel, madokaApp)

      } catch (error) {
        console.error('Failed to initialize Live2D:', error)
      }
    }

    loadAllScripts()

    return () => {
      const scripts = document.querySelectorAll('script')
      scripts.forEach(script => {
        if (script.src.includes('live2d') || script.src.includes('pixi')) {
          script.remove()
        }
      })
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none">
      <canvas
        ref={leftCanvasRef}
        className="absolute left-0 bottom-0 pointer-events-auto"
        style={{ 
          width: '1200px', 
          height: '800px', 
          transform: 'translateX(-300px)' // Moved further left
        }}
      />
      <canvas
        ref={rightCanvasRef}
        className="absolute right-0 bottom-0 pointer-events-auto"
        style={{ 
          width: '1200px', 
          height: '800px', 
          transform: 'translateX(-10px)'  // Adjusted right side position
        }}
      />
    </div>
  )
}
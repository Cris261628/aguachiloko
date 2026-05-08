"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Video de fondo submarino en bucle.
 * 
 * Cómo funciona:
 * - Reproduce el video en /public/videos/underwater.mp4 a pantalla completa, en bucle
 * - Si el video no existe o falla la carga, hace fallback al gradiente "ocean-gradient"
 *   (no se rompe nada — la web sigue viéndose bien)
 * - Encima del video pone una capa oscurecida (overlay) para que el texto sea legible
 * - En móviles con conexión "lenta" no reproduce el video (ahorra datos), muestra solo el poster
 * 
 * Cómo agregar el video:
 *   1. Pon tu archivo MP4 en: public/videos/underwater.mp4
 *   2. (Opcional) Pon una imagen de respaldo en: public/images/underwater-poster.jpg
 *   3. Listo — se carga automático
 */
export function UnderwaterVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasError, setHasError] = useState(false)
  const [shouldPlayVideo, setShouldPlayVideo] = useState(true)
  const CLOUDINARY_CLOUD_NAME = "dvqlpukzw"
  const CLOUDINARY_VIDEO_ID = "14920042-uhd_3840_2160_25fps_cxf4jp"
  const POSTER_FRAME_SECOND = 2

  useEffect(() => {
    // Detecta conexión lenta o modo "ahorro de datos" para no reproducir video pesado
    const connection = (navigator as any).connection
    if (connection) {
      const slowConnection = connection.saveData ||
        connection.effectiveType === "slow-2g" ||
        connection.effectiveType === "2g"
      if (slowConnection) {
        setShouldPlayVideo(false)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Capa de fallback (gradiente oceánico) — siempre presente debajo del video */}
      <div className="absolute inset-0 ocean-gradient" />

      {/* Video — solo se monta si shouldPlayVideo es true y no ha fallado */}
      {shouldPlayVideo && !hasError && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="https://res.cloudinary.com/dvqlpukzw/video/upload/q_auto,f_auto,w_1920,so_2/14920042-uhd_3840_2160_25fps_cxf4jp.jpg"
          onError={() => setHasError(true)}
          aria-hidden="true"
        >
          <source src="https://res.cloudinary.com/dvqlpukzw/video/upload/q_auto,f_auto,w_1920/14920042-uhd_3840_2160_25fps_cxf4jp.mp4" type="video/mp4" />
        </video>
      )}

      {/* Si el video falló o no se reproduce, mostrar el poster como imagen estática */}
      {(hasError || !shouldPlayVideo) && (
        <img
          src="https://res.cloudinary.com/dvqlpukzw/video/upload/q_auto,f_auto,w_1920,so_2/14920042-uhd_3840_2160_25fps_cxf4jp.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            // Si tampoco hay poster, ocultamos la imagen y queda el gradiente
            ;(e.target as HTMLImageElement).style.display = "none"
          }}
        />
      )}

      {/* Overlay oscurecido para legibilidad del contenido encima */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/40 via-ocean-mid/50 to-ocean-deep/70" />
    </div>
  )
}

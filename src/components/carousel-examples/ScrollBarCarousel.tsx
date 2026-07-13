import { useCallback, useEffect, useRef, useState, type PointerEvent } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaCarouselType } from 'embla-carousel'
import { CAROUSEL_SLIDES } from '../../data/carouselSlides'
import { numberWithinRange } from './tweenHelpers'
import styles from './ScrollBarCarousel.module.css'

const THUMB_WIDTH_PERCENT = (1 / CAROUSEL_SLIDES.length) * 100

function ScrollBarCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [progress, setProgress] = useState(0)
  const [dragging, setDragging] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)
  const isDraggingRef = useRef(false)

  const onScroll = useCallback((api: EmblaCarouselType) => {
    if (isDraggingRef.current) return
    setProgress(numberWithinRange(api.scrollProgress(), 0, 1))
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onScroll(emblaApi)
    emblaApi.on('scroll', onScroll)
    emblaApi.on('reInit', onScroll)
  }, [emblaApi, onScroll])

  const updateFromClientX = useCallback(
    (clientX: number) => {
      if (!emblaApi || !trackRef.current) return
      const rect = trackRef.current.getBoundingClientRect()
      const ratio = numberWithinRange((clientX - rect.left) / rect.width, 0, 1)
      setProgress(ratio)
      const index = Math.round(ratio * (CAROUSEL_SLIDES.length - 1))
      emblaApi.scrollTo(index, true)
    },
    [emblaApi],
  )

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true
    setDragging(true)
    e.currentTarget.setPointerCapture(e.pointerId)
    updateFromClientX(e.clientX)
  }

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return
    updateFromClientX(e.clientX)
  }

  const handlePointerUp = (e: PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = false
    setDragging(false)
    e.currentTarget.releasePointerCapture(e.pointerId)
    if (emblaApi) setProgress(numberWithinRange(emblaApi.scrollProgress(), 0, 1))
  }

  const thumbLeft = progress * (100 - THUMB_WIDTH_PERCENT)

  return (
    <div>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {CAROUSEL_SLIDES.map((slide) => (
            <div className={styles.slide} key={slide.alt}>
              <img src={slide.src} alt={slide.alt} className={styles.slideImage} />
            </div>
          ))}
        </div>
      </div>
      <div
        className={styles.track}
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <div
          className={dragging ? `${styles.thumb} ${styles.thumbDragging}` : styles.thumb}
          style={{ width: `${THUMB_WIDTH_PERCENT}%`, left: `${thumbLeft}%` }}
        />
      </div>
    </div>
  )
}

export default ScrollBarCarousel

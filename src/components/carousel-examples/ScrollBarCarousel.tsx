import { useCallback, useEffect, useRef, useState, type MouseEvent } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaCarouselType } from 'embla-carousel'
import { CAROUSEL_SLIDES } from '../../data/carouselSlides'
import styles from './ScrollBarCarousel.module.css'

const THUMB_WIDTH_PERCENT = (1 / CAROUSEL_SLIDES.length) * 100

function ScrollBarCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [progress, setProgress] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const onScroll = useCallback((api: EmblaCarouselType) => {
    setProgress(Math.min(1, Math.max(0, api.scrollProgress())))
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onScroll(emblaApi)
    emblaApi.on('scroll', onScroll)
    emblaApi.on('reInit', onScroll)
  }, [emblaApi, onScroll])

  const handleTrackClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!emblaApi || !trackRef.current) return
    const rect = trackRef.current.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    const index = Math.round(ratio * (CAROUSEL_SLIDES.length - 1))
    emblaApi.scrollTo(index)
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
      <div className={styles.track} ref={trackRef} onClick={handleTrackClick}>
        <div
          className={styles.thumb}
          style={{ width: `${THUMB_WIDTH_PERCENT}%`, left: `${thumbLeft}%` }}
        />
      </div>
    </div>
  )
}

export default ScrollBarCarousel

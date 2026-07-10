import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaCarouselType } from 'embla-carousel'
import { CAROUSEL_SLIDES } from '../../data/carouselSlides'
import styles from './ProgressCarousel.module.css'

function ProgressCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [progress, setProgress] = useState(0)

  const onScroll = useCallback((api: EmblaCarouselType) => {
    setProgress(Math.min(1, Math.max(0, api.scrollProgress())) * 100)
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onScroll(emblaApi)
    emblaApi.on('scroll', onScroll)
    emblaApi.on('reInit', onScroll)
  }, [emblaApi, onScroll])

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
      <div className={styles.progressTrack}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>
      <div className={styles.controls}>
        <button type="button" onClick={() => emblaApi?.scrollPrev()}>
          Prev
        </button>
        <button type="button" onClick={() => emblaApi?.scrollNext()}>
          Next
        </button>
      </div>
    </div>
  )
}

export default ProgressCarousel

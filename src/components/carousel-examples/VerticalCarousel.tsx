import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { CAROUSEL_SLIDES } from '../../data/carouselSlides'
import styles from './VerticalCarousel.module.css'

function VerticalCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, axis: 'y' })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div className={styles.wrapper}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {CAROUSEL_SLIDES.slice(0, 4).map((slide) => (
            <div className={styles.slide} key={slide.alt}>
              <img src={slide.src} alt={slide.alt} className={styles.slideImage} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.controls}>
        <button type="button" onClick={scrollPrev}>
          ▲
        </button>
        <button type="button" onClick={scrollNext}>
          ▼
        </button>
      </div>
    </div>
  )
}

export default VerticalCarousel

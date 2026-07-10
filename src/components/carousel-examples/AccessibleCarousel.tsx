import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { CAROUSEL_SLIDES } from '../../data/carouselSlides'
import styles from './DefaultCarousel.module.css'

function AccessibleCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div>
      <div className={styles.viewport} ref={emblaRef} aria-roledescription="carousel" aria-label="Photo carousel">
        <div className={styles.container}>
          {CAROUSEL_SLIDES.map((slide, index) => (
            <div
              className={styles.slide}
              key={slide.alt}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${CAROUSEL_SLIDES.length}`}
            >
              <img src={slide.src} alt={slide.alt} className={styles.slideImage} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.controls}>
        <button type="button" onClick={scrollPrev} aria-label="Previous slide">
          Prev
        </button>
        <button type="button" onClick={scrollNext} aria-label="Next slide">
          Next
        </button>
      </div>
    </div>
  )
}

export default AccessibleCarousel

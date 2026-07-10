import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoHeight from 'embla-carousel-auto-height'
import { CAROUSEL_SLIDES } from '../../data/carouselSlides'
import styles from './AutoHeightCarousel.module.css'

const HEIGHTS = [140, 260, 180, 320, 200, 240]

function AutoHeightCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [AutoHeight()])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {CAROUSEL_SLIDES.map((slide, index) => (
            <div className={styles.slide} key={slide.alt}>
              <img
                src={slide.src}
                alt={slide.alt}
                className={styles.slideImage}
                style={{ height: HEIGHTS[index] }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.controls}>
        <button type="button" onClick={scrollPrev}>
          Prev
        </button>
        <button type="button" onClick={scrollNext}>
          Next
        </button>
      </div>
    </div>
  )
}

export default AutoHeightCarousel

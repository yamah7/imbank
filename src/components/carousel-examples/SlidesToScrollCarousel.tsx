import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { CAROUSEL_SLIDES } from '../../data/carouselSlides'
import styles from './SlidesToScrollCarousel.module.css'

function SlidesToScrollCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 2 })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

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
      <div className={styles.controls}>
        <button type="button" onClick={scrollPrev}>
          Prev
        </button>
        <button type="button" onClick={scrollNext}>
          Next (jumps 2)
        </button>
      </div>
    </div>
  )
}

export default SlidesToScrollCarousel

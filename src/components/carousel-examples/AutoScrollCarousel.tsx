import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { CAROUSEL_SLIDES } from '../../data/carouselSlides'
import styles from './AutoScrollCarousel.module.css'

const LOOP_SLIDES = [...CAROUSEL_SLIDES, ...CAROUSEL_SLIDES]

function AutoScrollCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ speed: 1, stopOnInteraction: false }),
  ])

  return (
    <div className={styles.viewport} ref={emblaRef}>
      <div className={styles.container}>
        {LOOP_SLIDES.map((slide, index) => (
          <div className={styles.slide} key={`${slide.alt}-${index}`}>
            <img src={slide.src} alt={slide.alt} className={styles.slideImage} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AutoScrollCarousel

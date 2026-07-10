import useEmblaCarousel from 'embla-carousel-react'
import { CAROUSEL_SLIDES } from '../../data/carouselSlides'
import styles from './MultiSlideCarousel.module.css'

function MultiSlideCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' })

  return (
    <div className={styles.viewport} ref={emblaRef}>
      <div className={styles.container}>
        {CAROUSEL_SLIDES.map((slide) => (
          <div className={styles.slide} key={slide.alt}>
            <img src={slide.src} alt={slide.alt} className={styles.slideImage} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MultiSlideCarousel

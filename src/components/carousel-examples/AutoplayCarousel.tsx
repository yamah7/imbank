import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { CAROUSEL_SLIDES } from '../../data/carouselSlides'
import styles from './AutoplayCarousel.module.css'

function AutoplayCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2500, stopOnInteraction: false }),
  ])

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

export default AutoplayCarousel

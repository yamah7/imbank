import useEmblaCarousel from 'embla-carousel-react'
import { CAROUSEL_SLIDES } from '../../data/carouselSlides'
import styles from './DragFreeCarousel.module.css'

function DragFreeCarousel() {
  const [emblaRef] = useEmblaCarousel({ dragFree: true, containScroll: 'trimSnaps' })

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

export default DragFreeCarousel

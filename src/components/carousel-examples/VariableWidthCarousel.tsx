import useEmblaCarousel from 'embla-carousel-react'
import { CAROUSEL_SLIDES } from '../../data/carouselSlides'
import styles from './VariableWidthCarousel.module.css'

const WIDTHS = [140, 260, 180, 320, 200, 240]

function VariableWidthCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start', containScroll: 'trimSnaps' })

  return (
    <div className={styles.viewport} ref={emblaRef}>
      <div className={styles.container}>
        {CAROUSEL_SLIDES.map((slide, index) => (
          <div className={styles.slide} style={{ width: WIDTHS[index] }} key={slide.alt}>
            <img src={slide.src} alt={slide.alt} className={styles.slideImage} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default VariableWidthCarousel

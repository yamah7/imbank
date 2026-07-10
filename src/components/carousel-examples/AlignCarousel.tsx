import useEmblaCarousel from 'embla-carousel-react'
import { CAROUSEL_SLIDES } from '../../data/carouselSlides'
import styles from './AlignCarousel.module.css'

function AlignRow({ align, label }: { align: 'start' | 'center'; label: string }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, align })

  return (
    <div className={styles.row}>
      <p className={styles.label}>{label}</p>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {CAROUSEL_SLIDES.map((slide) => (
            <div className={styles.slide} key={slide.alt}>
              <img src={slide.src} alt={slide.alt} className={styles.slideImage} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function AlignCarousel() {
  return (
    <div>
      <AlignRow align="start" label="align: 'start'" />
      <AlignRow align="center" label="align: 'center'" />
    </div>
  )
}

export default AlignCarousel

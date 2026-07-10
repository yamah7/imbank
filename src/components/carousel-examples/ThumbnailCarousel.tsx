import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { CAROUSEL_SLIDES } from '../../data/carouselSlides'
import styles from './ThumbnailCarousel.module.css'

function ThumbnailCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ loop: true })
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })

  const onThumbClick = useCallback(
    (index: number) => {
      emblaMainApi?.scrollTo(index)
    },
    [emblaMainApi],
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    const index = emblaMainApi.selectedScrollSnap()
    setSelectedIndex(index)
    emblaThumbsApi.scrollTo(index)
  }, [emblaMainApi, emblaThumbsApi])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div>
      <div className={styles.viewport} ref={emblaMainRef}>
        <div className={styles.container}>
          {CAROUSEL_SLIDES.map((slide) => (
            <div className={styles.slide} key={slide.alt}>
              <img src={slide.src} alt={slide.alt} className={styles.slideImage} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.thumbsViewport} ref={emblaThumbsRef}>
        <div className={styles.thumbsContainer}>
          {CAROUSEL_SLIDES.map((slide, index) => (
            <button
              type="button"
              key={slide.alt}
              onClick={() => onThumbClick(index)}
              className={
                index === selectedIndex ? `${styles.thumb} ${styles.thumbSelected}` : styles.thumb
              }
            >
              <img src={slide.src} alt={slide.alt} className={styles.thumbImage} />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ThumbnailCarousel

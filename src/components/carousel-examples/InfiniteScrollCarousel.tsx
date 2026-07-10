import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaCarouselType } from 'embla-carousel'
import { CAROUSEL_SLIDES } from '../../data/carouselSlides'
import styles from './InfiniteScrollCarousel.module.css'

function InfiniteScrollCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [items, setItems] = useState(() => CAROUSEL_SLIDES.map((slide, index) => ({ ...slide, id: index })))

  const maybeLoadMore = useCallback(
    (api: EmblaCarouselType) => {
      if (api.canScrollNext()) return
      setItems((prev) => [
        ...prev,
        ...CAROUSEL_SLIDES.map((slide, index) => ({ ...slide, id: prev.length + index })),
      ])
    },
    [],
  )

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('settle', maybeLoadMore)
  }, [emblaApi, maybeLoadMore])

  useEffect(() => {
    emblaApi?.reInit()
  }, [emblaApi, items.length])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {items.map((slide) => (
            <div className={styles.slide} key={slide.id}>
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
          Next
        </button>
        <span className={styles.count}>{items.length} slides loaded</span>
      </div>
    </div>
  )
}

export default InfiniteScrollCarousel

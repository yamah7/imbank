import { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaCarouselType } from 'embla-carousel'
import { CAROUSEL_SLIDES } from '../../data/carouselSlides'
import styles from './LazyLoadCarousel.module.css'

function LazyLoadCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [loaded, setLoaded] = useState<Set<number>>(new Set([0]))
  const pending = useRef<Set<number>>(new Set())

  const loadInView = useCallback((api: EmblaCarouselType) => {
    api.slidesInView().forEach((index) => {
      if (pending.current.has(index)) return
      pending.current.add(index)
      setTimeout(() => {
        setLoaded((prev) => new Set(prev).add(index))
      }, 400)
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    loadInView(emblaApi)
    emblaApi.on('slidesInView', loadInView)
    emblaApi.on('select', loadInView)
  }, [emblaApi, loadInView])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {CAROUSEL_SLIDES.map((slide, index) => (
            <div className={styles.slide} key={slide.alt}>
              {loaded.has(index) ? (
                <img src={slide.src} alt={slide.alt} className={styles.slideImage} />
              ) : (
                <div className={styles.placeholder}>Loading…</div>
              )}
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

export default LazyLoadCarousel

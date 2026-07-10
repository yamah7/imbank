import { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaCarouselType, EmblaEventType } from 'embla-carousel'
import { CAROUSEL_SLIDES } from '../../data/carouselSlides'
import { diffToTargetForSlide, numberWithinRange } from './tweenHelpers'
import styles from './OpacityTweenCarousel.module.css'

const TWEEN_FACTOR_BASE = 0.52

function OpacityTweenCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])

  const setTweenNodes = useCallback((api: EmblaCarouselType) => {
    tweenNodes.current = api
      .slideNodes()
      .map((slideNode) => slideNode.querySelector<HTMLElement>(`.${styles.slideImage}`))
      .filter((node): node is HTMLElement => node !== null)
  }, [])

  const setTweenFactor = useCallback((api: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * api.scrollSnapList().length
  }, [])

  const tweenOpacity = useCallback((api: EmblaCarouselType, eventName?: EmblaEventType) => {
    const scrollProgress = api.scrollProgress()
    const slidesInView = api.slidesInView()
    const isScrollEvent = eventName === 'scroll'

    api.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      const slidesInSnap = api.internalEngine().slideRegistry[snapIndex]

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return

        const diffToTarget = diffToTargetForSlide(api, scrollSnap, scrollProgress, slideIndex)
        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
        const opacity = numberWithinRange(tweenValue, 0.2, 1)
        const node = tweenNodes.current[slideIndex]
        if (node) node.style.opacity = opacity.toString()
      })
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenOpacity(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity)
  }, [emblaApi, setTweenNodes, setTweenFactor, tweenOpacity])

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

export default OpacityTweenCarousel

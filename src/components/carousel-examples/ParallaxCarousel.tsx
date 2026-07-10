import { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaCarouselType, EmblaEventType } from 'embla-carousel'
import { CAROUSEL_SLIDES } from '../../data/carouselSlides'
import { diffToTargetForSlide } from './tweenHelpers'
import styles from './ParallaxCarousel.module.css'

const TWEEN_FACTOR_BASE = 0.2

function ParallaxCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])

  const setTweenNodes = useCallback((api: EmblaCarouselType) => {
    tweenNodes.current = api
      .slideNodes()
      .map((slideNode) => slideNode.querySelector<HTMLElement>(`.${styles.layer}`))
      .filter((node): node is HTMLElement => node !== null)
  }, [])

  const setTweenFactor = useCallback((api: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * api.scrollSnapList().length
  }, [])

  const tweenParallax = useCallback((api: EmblaCarouselType, eventName?: EmblaEventType) => {
    const scrollProgress = api.scrollProgress()
    const slidesInView = api.slidesInView()
    const isScrollEvent = eventName === 'scroll'

    api.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      const slidesInSnap = api.internalEngine().slideRegistry[snapIndex]

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return

        const diffToTarget = diffToTargetForSlide(api, scrollSnap, scrollProgress, slideIndex)
        const translate = diffToTarget * -tweenFactor.current * 100
        const node = tweenNodes.current[slideIndex]
        if (node) node.style.transform = `translateX(${translate}%)`
      })
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenParallax(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('slideFocus', tweenParallax)
  }, [emblaApi, setTweenNodes, setTweenFactor, tweenParallax])

  return (
    <div>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {CAROUSEL_SLIDES.map((slide) => (
            <div className={styles.slide} key={slide.alt}>
              <div className={styles.parallax}>
                <div className={styles.layer}>
                  <img src={slide.src} alt={slide.alt} className={styles.slideImage} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.controls}>
        <button type="button" onClick={() => emblaApi?.scrollPrev()}>
          Prev
        </button>
        <button type="button" onClick={() => emblaApi?.scrollNext()}>
          Next
        </button>
      </div>
    </div>
  )
}

export default ParallaxCarousel

import { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaCarouselType, EmblaEventType } from 'embla-carousel'
import { diffToTargetForSlide, numberWithinRange } from './tweenHelpers'
import styles from './IosPickerCarousel.module.css'

const HOURS = Array.from({ length: 12 }, (_, i) => `${i + 1}:00`)
const TWEEN_FACTOR_BASE = 0.9

interface IosPickerCarouselProps {
  loop: boolean
}

function IosPickerCarousel({ loop }: IosPickerCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop, axis: 'y', align: 'center' })
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])

  const setTweenNodes = useCallback((api: EmblaCarouselType) => {
    tweenNodes.current = api
      .slideNodes()
      .map((slideNode) => slideNode.querySelector<HTMLElement>(`.${styles.label}`))
      .filter((node): node is HTMLElement => node !== null)
  }, [])

  const setTweenFactor = useCallback((api: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * api.scrollSnapList().length
  }, [])

  const tweenStyles = useCallback((api: EmblaCarouselType, eventName?: EmblaEventType) => {
    const scrollProgress = api.scrollProgress()
    const slidesInView = api.slidesInView()
    const isScrollEvent = eventName === 'scroll'

    api.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      const slidesInSnap = api.internalEngine().slideRegistry[snapIndex]

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return

        const diffToTarget = diffToTargetForSlide(api, scrollSnap, scrollProgress, slideIndex)
        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
        const opacity = numberWithinRange(tweenValue, 0.25, 1)
        const scale = numberWithinRange(0.75 + tweenValue * 0.25, 0.75, 1)
        const node = tweenNodes.current[slideIndex]
        if (node) {
          node.style.opacity = opacity.toString()
          node.style.transform = `scale(${scale})`
        }
      })
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenStyles(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenStyles)
      .on('scroll', tweenStyles)
      .on('slideFocus', tweenStyles)
  }, [emblaApi, setTweenNodes, setTweenFactor, tweenStyles])

  return (
    <div className={styles.wrapper}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {HOURS.map((hour) => (
            <div className={styles.slide} key={hour}>
              <span className={styles.label}>{hour}</span>
            </div>
          ))}
        </div>
        <div className={styles.selectionBand} />
      </div>
    </div>
  )
}

export default IosPickerCarousel

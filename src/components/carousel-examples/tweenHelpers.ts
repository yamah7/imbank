import type { EmblaCarouselType } from 'embla-carousel'

export const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

export function diffToTargetForSlide(
  emblaApi: EmblaCarouselType,
  scrollSnap: number,
  scrollProgress: number,
  slideIndex: number,
): number {
  const engine = emblaApi.internalEngine()
  let diffToTarget = scrollSnap - scrollProgress

  if (engine.options.loop) {
    engine.slideLooper.loopPoints.forEach((loopItem) => {
      const target = loopItem.target()
      if (slideIndex === loopItem.index && target !== 0) {
        const sign = Math.sign(target)
        if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
        if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
      }
    })
  }

  return diffToTarget
}

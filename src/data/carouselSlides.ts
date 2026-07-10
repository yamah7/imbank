import slide1 from '../assets/carousel/slide-1.svg'
import slide2 from '../assets/carousel/slide-2.svg'
import slide3 from '../assets/carousel/slide-3.svg'
import slide4 from '../assets/carousel/slide-4.svg'
import slide5 from '../assets/carousel/slide-5.svg'
import slide6 from '../assets/carousel/slide-6.svg'

export interface CarouselSlide {
  src: string
  alt: string
}

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  { src: slide1, alt: 'Mountains' },
  { src: slide2, alt: 'Ocean' },
  { src: slide3, alt: 'Desert' },
  { src: slide4, alt: 'Forest' },
  { src: slide5, alt: 'Sunset' },
  { src: slide6, alt: 'Canyon' },
]

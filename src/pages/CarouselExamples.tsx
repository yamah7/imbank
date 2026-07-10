import DefaultCarousel from '../components/carousel-examples/DefaultCarousel'
import LoopCarousel from '../components/carousel-examples/LoopCarousel'
import RtlCarousel from '../components/carousel-examples/RtlCarousel'
import MultiSlideCarousel from '../components/carousel-examples/MultiSlideCarousel'
import AutoplayCarousel from '../components/carousel-examples/AutoplayCarousel'
import AutoScrollCarousel from '../components/carousel-examples/AutoScrollCarousel'
import AccessibleCarousel from '../components/carousel-examples/AccessibleCarousel'
import FadeCarousel from '../components/carousel-examples/FadeCarousel'
import VerticalCarousel from '../components/carousel-examples/VerticalCarousel'
import ScaleCarousel from '../components/carousel-examples/ScaleCarousel'
import ThumbnailCarousel from '../components/carousel-examples/ThumbnailCarousel'
import VariableWidthCarousel from '../components/carousel-examples/VariableWidthCarousel'
import DragFreeCarousel from '../components/carousel-examples/DragFreeCarousel'
import SlidesToScrollCarousel from '../components/carousel-examples/SlidesToScrollCarousel'
import AlignCarousel from '../components/carousel-examples/AlignCarousel'
import ProgressCarousel from '../components/carousel-examples/ProgressCarousel'
import AutoHeightCarousel from '../components/carousel-examples/AutoHeightCarousel'
import ParallaxCarousel from '../components/carousel-examples/ParallaxCarousel'
import ScaleTweenCarousel from '../components/carousel-examples/ScaleTweenCarousel'
import OpacityTweenCarousel from '../components/carousel-examples/OpacityTweenCarousel'
import LazyLoadCarousel from '../components/carousel-examples/LazyLoadCarousel'
import ScrollBarCarousel from '../components/carousel-examples/ScrollBarCarousel'
import InfiniteScrollCarousel from '../components/carousel-examples/InfiniteScrollCarousel'
import IosPickerDefaultCarousel from '../components/carousel-examples/IosPickerDefaultCarousel'
import IosPickerLoopCarousel from '../components/carousel-examples/IosPickerLoopCarousel'
import styles from './CarouselExamples.module.css'

function CarouselExamples() {
  return (
    <div className={styles.page}>
      <h1>Embla Carousel Examples</h1>
      <p className={styles.intro}>
        Organized to match the{' '}
        <a href="https://www.embla-carousel.com/docs/examples/predefined/" target="_blank" rel="noreferrer">
          official Embla docs
        </a>{' '}
        example categories.
      </p>

      <h2 className={styles.category}>Basic Examples</h2>

      <section className={styles.example}>
        <h3>Default</h3>
        <p>A carousel with no options passed — the starting point for everything else.</p>
        <DefaultCarousel />
      </section>

      <section className={styles.example}>
        <h3>Loop</h3>
        <p><code>loop: true</code> — Prev/Next wrap around infinitely.</p>
        <LoopCarousel />
      </section>

      <section className={styles.example}>
        <h3>Right to left</h3>
        <p><code>direction: 'rtl'</code> with <code>dir="rtl"</code> on the viewport.</p>
        <RtlCarousel />
      </section>

      <section className={styles.example}>
        <h3>Slides to scroll</h3>
        <p><code>slidesToScroll: 2</code> — Next/Prev jump two slides at a time.</p>
        <SlidesToScrollCarousel />
      </section>

      <section className={styles.example}>
        <h3>Drag free</h3>
        <p>Momentum-based dragging with no snapping to individual slides. Try dragging it.</p>
        <DragFreeCarousel />
      </section>

      <section className={styles.example}>
        <h3>Align</h3>
        <p>Comparing the <code>align</code> option: slides snap to the start vs. the center of the viewport.</p>
        <AlignCarousel />
      </section>

      <section className={styles.example}>
        <h3>Variable widths</h3>
        <p>Each slide keeps its own predefined pixel width instead of a shared percentage.</p>
        <VariableWidthCarousel />
      </section>

      <section className={styles.example}>
        <h3>Y-axis</h3>
        <p>Scrolls on the y-axis instead of x.</p>
        <VerticalCarousel />
      </section>

      <section className={styles.example}>
        <h3>Slides per view</h3>
        <p>Three slides visible at once, using CSS gap and flex-basis.</p>
        <MultiSlideCarousel />
      </section>

      <section className={styles.example}>
        <h3>Thumbnails</h3>
        <p>Two synced carousel instances: a main view and a thumbnail strip.</p>
        <ThumbnailCarousel />
      </section>

      <h2 className={styles.category}>Plugin Examples</h2>

      <section className={styles.example}>
        <h3>Accessibility</h3>
        <p>ARIA roles and labels (<code>role="group"</code>, slide position announcements) for screen readers.</p>
        <AccessibleCarousel />
      </section>

      <section className={styles.example}>
        <h3>Autoplay</h3>
        <p>Advances automatically via the embla-carousel-autoplay plugin.</p>
        <AutoplayCarousel />
      </section>

      <section className={styles.example}>
        <h3>Auto scroll</h3>
        <p>Continuous, constant-speed scrolling via embla-carousel-auto-scroll — good for logo tickers.</p>
        <AutoScrollCarousel />
      </section>

      <section className={styles.example}>
        <h3>Auto height</h3>
        <p>Uses the embla-carousel-auto-height plugin so the viewport resizes to fit each slide.</p>
        <AutoHeightCarousel />
      </section>

      <section className={styles.example}>
        <h3>Fade</h3>
        <p>Crossfades between slides via the embla-carousel-fade plugin.</p>
        <FadeCarousel />
      </section>

      <section className={styles.example}>
        <h3>Class names</h3>
        <p>Uses embla-carousel-class-names to highlight the centered slide.</p>
        <ScaleCarousel />
      </section>

      <h2 className={styles.category}>Tween Examples</h2>

      <section className={styles.example}>
        <h3>Parallax</h3>
        <p>Each slide's image shifts at a different rate than the slide itself while scrolling.</p>
        <ParallaxCarousel />
      </section>

      <section className={styles.example}>
        <h3>Scale</h3>
        <p>Slides scale down continuously as they move away from the center while dragging.</p>
        <ScaleTweenCarousel />
      </section>

      <section className={styles.example}>
        <h3>Opacity</h3>
        <p>Slides fade out continuously as they move away from the center while dragging.</p>
        <OpacityTweenCarousel />
      </section>

      <h2 className={styles.category}>Miscellaneous Examples</h2>

      <section className={styles.example}>
        <h3>Progress</h3>
        <p>Tracks <code>scrollProgress()</code> from the Embla API to drive a progress bar.</p>
        <ProgressCarousel />
      </section>

      <section className={styles.example}>
        <h3>Lazy load</h3>
        <p>Slide images load only once they're in (or about to enter) view.</p>
        <LazyLoadCarousel />
      </section>

      <section className={styles.example}>
        <h3>Scroll bar</h3>
        <p>A draggable-track scrollbar synced to scroll progress. Click anywhere on the track to jump.</p>
        <ScrollBarCarousel />
      </section>

      <section className={styles.example}>
        <h3>Infinite scroll</h3>
        <p>New slides are appended on the fly as you approach the end.</p>
        <InfiniteScrollCarousel />
      </section>

      <section className={styles.example}>
        <h3>iOS style picker (default)</h3>
        <p>A vertical wheel picker that stops at the first and last item.</p>
        <IosPickerDefaultCarousel />
      </section>

      <section className={styles.example}>
        <h3>iOS style picker (loop)</h3>
        <p>Same picker, but wraps around infinitely.</p>
        <IosPickerLoopCarousel />
      </section>
    </div>
  )
}

export default CarouselExamples

interface Window {
  /** Set by Motion.astro so overlays can freeze page scrolling. */
  __lenis?: { stop: () => void; start: () => void };
}

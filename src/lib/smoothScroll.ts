/**
 * Smooth scroll utility for navigating between sections
 */

// Easing function for smoother scrolling
const easeInOutQuad = (t: number): number => {
  return t < 0.5
    ? 2 * t * t
    : -1 + (4 - 2 * t) * t;
};

/**
 * Smoothly scrolls to an element with customizable duration and easing
 */
export const smoothScrollTo = (
  element: HTMLElement,
  duration: number = 1000,
  offset: number = 0
): void => {
  if (typeof window === 'undefined') return;

  const startPosition = window.scrollY;
  const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  // Improved animation function with better timing
  const animateScroll = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easedProgress = easeInOutQuad(progress);

    window.scrollTo({
      top: startPosition + distance * easedProgress,
      behavior: 'auto' // Using our custom animation, not the browser's smooth scroll
    });

    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

/**
 * Smoothly scrolls to an element by its ID
 */
export const scrollToElementById = (
  elementId: string,
  duration: number = 1000,
  offset: number = 0
): void => {
  if (typeof document === 'undefined') return;

  const element = document.getElementById(elementId);
  if (element) {
    smoothScrollTo(element, duration, offset);
  } else {
    console.warn(`Element with ID "${elementId}" not found.`);
  }
};

/**
 * Smoothly scrolls to an element by selector
 */
export const scrollToElementBySelector = (
  selector: string,
  duration: number = 1000,
  offset: number = 0
): void => {
  if (typeof document === 'undefined') return;

  const element = document.querySelector(selector);
  if (element instanceof HTMLElement) {
    smoothScrollTo(element, duration, offset);
  } else {
    console.warn(`Element with selector "${selector}" not found or not an HTMLElement.`);
  }
};

/**
 * Handles hash navigation with smooth scrolling
 */
export const handleHashNavigation = (): void => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const handleHashChange = () => {
    const hash = window.location.hash;
    if (hash) {
      // Use the hash as a selector directly
      setTimeout(() => {
        scrollToElementBySelector(hash, 800, 80);
      }, 100);
    }
  };

  // Handle hash on page load
  handleHashChange();

  // Listen for hash changes
  window.addEventListener('hashchange', handleHashChange);

  // Additional click handler for anchor links with improved event delegation
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a[href^="#"]'); // Only select anchors with hash links

    if (anchor && anchor.getAttribute('href')) {
      const hash = anchor.getAttribute('href');
      if (hash && hash.startsWith('#')) {
        e.preventDefault();
        window.history.pushState(null, '', hash);
        scrollToElementBySelector(hash, 800, 80);
      }
    }
  });
};

/**
 * Initialize smooth scrolling throughout the site
 */
export const initSmoothScrolling = (): (() => void) => {
  if (typeof window === 'undefined') {
    return () => {}; // No-op cleanup function for SSR
  }

  handleHashNavigation();

  // Return cleanup function
  return () => {
    window.removeEventListener('hashchange', handleHashNavigation);
  };
};

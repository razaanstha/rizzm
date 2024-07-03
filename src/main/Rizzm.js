import RizzmKeyframes from "./rizzm-keyframes.js";

/**
 * Rizzm class for animating elements when they enter the viewport.
 * @class
 */
class Rizzm {
  /**
   * Creates an instance of Rizzm.
   * @param {Object} config - Configuration options.
   * @param {string|string[]} [config.selector=".js-rizzm"] - The CSS selector(s) for the elements to be animated.
   * @param {Object} [config.options={}] - Configuration options for IntersectionObserver.
   * @param {Element} [config.options.root=null] - The element that is used as the viewport for checking visibility.
   * @param {string} [config.options.rootMargin="0px"] - Margin around the root.
   * @param {number} [config.options.threshold=0.24] - A threshold of intersection ratio.
   * @param {number} [config.options.stagger=200] - Delay between the animations of each element.
   * @param {Object} [config.customKeyframes={}] - Custom keyframe animations.
   * @param {boolean} [config.paused=false] - Whether to initialize the observer immediately.
   */
  constructor(config = {}) {
    if (this.checkBrowserSupportAndSkipIfNotSupported()) {
      return;
    }

    const {
      selector = ".js-rizzm",
      options = {},
      customKeyframes = {},
      paused = false,
    } = config;

    this.selectors = Array.isArray(selector) ? selector : [selector];
    this.options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
      stagger: 200,
      ...options,
    };

    // Merge default keyframes with custom keyframes
    this.keyframeAnimations = {
      ...RizzmKeyframes,
      ...customKeyframes,
    };

    this.animatedElements = new Set(); // Track animated elements

    // Initialize Rizzm if not paused
    if (!paused) {
      this.initialize();
    }
  }

  /**
   * Initializes the observer and elements.
   */
  initialize() {
    this.observer = new IntersectionObserver(
      this.animateElements.bind(this),
      this.options
    );
    this.updateElements();
  }

  /**
   * Checks if the browser supports the required features and skips initialization if not.
   * @returns {boolean} - Returns true if browser does not support required features.
   */
  checkBrowserSupportAndSkipIfNotSupported() {
    if (
      !("IntersectionObserver" in window) ||
      !("animate" in Element.prototype)
    ) {
      console.warn(
        "BROWSER: Skipping Rizzm. Browser doesn't support IntersectionObserver and Web Animations API."
      );
      return true;
    }

    if (window.CSS && window.CSS.supports && !window.CSS.supports("--a", 0)) {
      console.warn("BROWSER: CSS variables are not supported.");
      return true;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      console.warn("Reduced motion enabled. ANIMATIONS PREVENTED.");
      return true;
    }

    return false;
  }

  /**
   * Animates elements when they intersect with the viewport.
   * @param {IntersectionObserverEntry[]} entries - The intersection observer entries.
   * @param {IntersectionObserver} observer - The intersection observer.
   */
  animateElements(entries, observer) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const element = entry.target;

        if (
          this.shouldPreventAnimation(element) ||
          this.animatedElements.has(element)
        ) {
          observer.unobserve(element);
          return;
        }

        const duration = parseInt(
          this.getCSSVariable(element, "--rizzm-duration", 500),
          10
        );
        const keyframe = this.getCSSVariable(
          element,
          "--rizzm-keyframe",
          "fadeInUp"
        );
        const customFrom = this.parseJSON(
          this.getCSSVariable(element, "--rizzm-from", null)
        );
        const customTo = this.parseJSON(
          this.getCSSVariable(element, "--rizzm-to", null)
        );
        const { from, to } = this.getAnimationKeyframes(
          keyframe,
          customFrom,
          customTo
        );
        const delay =
          parseInt(
            this.getCSSVariable(
              element,
              "--rizzm-stagger",
              this.options.stagger
            ),
            10
          ) * index;

        element.animate([from, to], {
          duration: duration,
          easing: "ease-out",
          fill: "forwards",
          delay: delay,
        }).onfinish = () => {
          element.style.opacity = "";
          element.style.transform = "";
          this.animatedElements.add(element); // Mark the element as animated
        };

        observer.unobserve(element);
      }
    });
  }

  /**
   * Determines if animation should be prevented for an element.
   * @param {Element} element - The element to check.
   * @returns {boolean} - Returns true if animation should be prevented.
   */
  shouldPreventAnimation(element) {
    const preventAnimations = getComputedStyle(element)
      .getPropertyValue("--rizzm-prevent-animations")
      .trim();
    const keyframe = getComputedStyle(element)
      .getPropertyValue("--rizzm-keyframe")
      .trim();

    return preventAnimations === "true" || keyframe === "none";
  }

  /**
   * Gets the value of a CSS variable for an element.
   * @param {Element} element - The element to get the CSS variable for.
   * @param {string} variableName - The CSS variable name.
   * @param {*} defaultValue - The default value if the CSS variable is not set.
   * @returns {*} - The value of the CSS variable or the default value.
   */
  getCSSVariable(element, variableName, defaultValue) {
    const value = getComputedStyle(element)
      .getPropertyValue(variableName)
      .trim();
    return value === "" ? defaultValue : value;
  }

  /**
   * Gets the animation keyframes for a given keyframe name, with optional custom overrides.
   * @param {string} keyframe - The keyframe name.
   * @param {Object} [customFrom={}] - Custom "from" keyframe properties.
   * @param {Object} [customTo={}] - Custom "to" keyframe properties.
   * @returns {Object} - The from and to keyframe properties.
   */
  getAnimationKeyframes(keyframe, customFrom = {}, customTo = {}) {
    const keyframeAnimation =
      this.keyframeAnimations[keyframe] || this.keyframeAnimations.fadeInUp;
    const from = { ...keyframeAnimation.from, ...customFrom };
    const to = { ...keyframeAnimation.to, ...customTo };
    return { from, to };
  }

  /**
   * Parses a JSON string and returns the resulting object, or a fallback value if parsing fails.
   * @param {string} json - The JSON string to parse.
   * @param {*} fallback - The fallback value if parsing fails.
   * @returns {*} - The parsed object or the fallback value.
   */
  parseJSON(json, fallback = {}) {
    if (!json) return fallback;
    try {
      return JSON.parse(json);
    } catch (error) {
      console.warn(`Invalid JSON: ${json}. Using fallback value.`);
      return fallback;
    }
  }

  /**
   * Updates the elements to be observed and animated based on the selector or provided elements.
   * @param {string|string[]|NodeList|Element} [newSelector=null] - The new selector or elements to observe.
   */
  updateElements(newSelector = null) {
    let newElements;

    if (newSelector) {
      if (Array.isArray(newSelector) || typeof newSelector === "string") {
        this.selectors = Array.isArray(newSelector)
          ? newSelector
          : [newSelector];
        newElements = this.selectors.flatMap((selector) =>
          Array.from(document.querySelectorAll(selector))
        );
      } else if (
        newSelector instanceof NodeList ||
        newSelector instanceof Element
      ) {
        newElements =
          newSelector instanceof NodeList
            ? Array.from(newSelector)
            : [newSelector];
      } else {
        console.warn("Invalid selector type.");
        return;
      }
    } else {
      newElements = this.selectors.flatMap((selector) =>
        Array.from(document.querySelectorAll(selector))
      );
    }

    if (!newElements || newElements.length === 0) {
      console.warn("No elements found with the specified selector(s).");
      return;
    }

    const batchStyles = [];
    newElements.forEach((element) => {
      if (
        !this.shouldPreventAnimation(element) &&
        !this.animatedElements.has(element)
      ) {
        batchStyles.push({ element, opacity: "0", transform: "none" });
        this.observer.observe(element);
      } else {
        element.style.opacity = "1";
        element.style.transform = "none";
      }
    });

    // Apply batched styles to prevent layout thrashing
    requestAnimationFrame(() => {
      batchStyles.forEach(({ element, opacity, transform }) => {
        element.style.opacity = opacity;
        element.style.transform = transform;
      });
    });
  }
}

export default Rizzm;

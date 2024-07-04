const RizzmKeyframes = {
  fadeIn: [
    { opacity: "var(--rizzm-fadein-opacity-start, 0)" },
    { opacity: "var(--rizzm-fadein-opacity-end, 1)" },
  ],
  fadeInUp: [
    {
      opacity: "var(--rizzm-fadein-up-opacity-start, 0)",
      transform: "translateY(var(--rizzm-fadein-up-translate-y-start, 20px))",
    },
    {
      opacity: "var(--rizzm-fadein-up-opacity-end, 1)",
      transform: "translateY(var(--rizzm-fadein-up-translate-y-end, 0))",
    },
  ],
  fadeInDown: [
    {
      opacity: "var(--rizzm-fadein-down-opacity-start, 0)",
      transform:
        "translateY(var(--rizzm-fadein-down-translate-y-start, -20px))",
    },
    {
      opacity: "var(--rizzm-fadein-down-opacity-end, 1)",
      transform: "translateY(var(--rizzm-fadein-down-translate-y-end, 0))",
    },
  ],
  fadeInLeft: [
    {
      opacity: "var(--rizzm-fadein-left-opacity-start, 0)",
      transform:
        "translateX(var(--rizzm-fadein-left-translate-x-start, -20px))",
    },
    {
      opacity: "var(--rizzm-fadein-left-opacity-end, 1)",
      transform: "translateX(var(--rizzm-fadein-left-translate-x-end, 0))",
    },
  ],
  fadeInRight: [
    {
      opacity: "var(--rizzm-fadein-right-opacity-start, 0)",
      transform:
        "translateX(var(--rizzm-fadein-right-translate-x-start, 20px))",
    },
    {
      opacity: "var(--rizzm-fadein-right-opacity-end, 1)",
      transform: "translateX(var(--rizzm-fadein-right-translate-x-end, 0))",
    },
  ],
  zoomIn: [
    {
      opacity: "var(--rizzm-zoom-in-opacity-start, 0)",
      transform: "scale(var(--rizzm-zoom-in-scale-start, 0.95))",
    },
    {
      opacity: "var(--rizzm-zoom-in-opacity-end, 1)",
      transform: "scale(var(--rizzm-zoom-in-scale-end, 1))",
    },
  ],
  zoomInRotate: [
    {
      opacity: "var(--rizzm-zoom-in-rotate-opacity-start, 0)",
      transform:
        "scale(var(--rizzm-zoom-in-rotate-scale-start, 0.95)) rotate(var(--rizzm-zoom-in-rotate-rotate-start, -5deg))",
    },
    {
      opacity: "var(--rizzm-zoom-in-rotate-opacity-end, 1)",
      transform:
        "scale(var(--rizzm-zoom-in-rotate-scale-end, 1)) rotate(var(--rizzm-zoom-in-rotate-rotate-end, 0))",
    },
  ],
  slideFromLeft: [
    {
      opacity: "var(--rizzm-slide-from-left-opacity-start, 0)",
      transform: "translateX(var(--rizzm-slide-from-left-start, -100%))",
    },
    {
      opacity: "var(--rizzm-slide-from-left-opacity-end, 1)",
      transform: "translateX(var(--rizzm-slide-from-left-end, 0))",
    },
  ],
  slideFromRight: [
    {
      opacity: "var(--rizzm-slide-from-right-opacity-start, 0)",
      transform: "translateX(var(--rizzm-slide-from-right-start, 100%))",
    },
    {
      opacity: "var(--rizzm-slide-from-right-opacity-end, 1)",
      transform: "translateX(var(--rizzm-slide-from-right-end, 0))",
    },
  ],
  slideFromTop: [
    {
      opacity: "var(--rizzm-slide-from-top-opacity-start, 0)",
      transform: "translateY(var(--rizzm-slide-from-top-start, -100%))",
    },
    {
      opacity: "var(--rizzm-slide-from-top-opacity-end, 1)",
      transform: "translateY(var(--rizzm-slide-from-top-end, 0))",
    },
  ],
  slideFromBottom: [
    {
      opacity: "var(--rizzm-slide-from-bottom-opacity-start, 0)",
      transform: "translateY(var(--rizzm-slide-from-bottom-start, 100%))",
    },
    {
      opacity: "var(--rizzm-slide-from-bottom-opacity-end, 1)",
      transform: "translateY(var(--rizzm-slide-from-bottom-end, 0))",
    },
  ],
  flipFromLeft: [
    {
      transform:
        "perspective(var(--rizzm-flip-from-left-perspective, 40em)) rotateY(var(--rizzm-flip-from-left-rotate-start, -90deg))",
      opacity: "var(--rizzm-flip-from-left-opacity-start, 0)",
    },
    {
      transform:
        "perspective(var(--rizzm-flip-from-left-perspective, 40em)) rotateY(var(--rizzm-flip-from-left-rotate-end, 0deg))",
      opacity: "var(--rizzm-flip-from-left-opacity-end, 1)",
    },
  ],
  flipFromRight: [
    {
      transform:
        "perspective(var(--rizzm-flip-from-right-perspective, 40em)) rotateY(var(--rizzm-flip-from-right-rotate-start, 90deg))",
      opacity: "var(--rizzm-flip-from-right-opacity-start, 0)",
    },
    {
      transform:
        "perspective(var(--rizzm-flip-from-right-perspective, 40em)) rotateY(var(--rizzm-flip-from-right-rotate-end, 0deg))",
      opacity: "var(--rizzm-flip-from-right-opacity-end, 1)",
    },
  ],
  flipFromTop: [
    {
      transform:
        "perspective(var(--rizzm-flip-from-top-perspective, 40em)) rotateX(var(--rizzm-flip-from-top-rotate-start, 90deg))",
      opacity: "var(--rizzm-flip-from-top-opacity-start, 0)",
    },
    {
      transform:
        "perspective(var(--rizzm-flip-from-top-perspective, 40em)) rotateX(var(--rizzm-flip-from-top-rotate-end, 0deg))",
      opacity: "var(--rizzm-flip-from-top-opacity-end, 1)",
    },
  ],
  flipFromBottom: [
    {
      transform:
        "perspective(var(--rizzm-flip-from-bottom-perspective, 40em)) rotateX(var(--rizzm-flip-from-bottom-rotate-start, -90deg))",
      opacity: "var(--rizzm-flip-from-bottom-opacity-start, 0)",
    },
    {
      transform:
        "perspective(var(--rizzm-flip-from-bottom-perspective, 40em)) rotateX(var(--rizzm-flip-from-bottom-rotate-end, 0deg))",
      opacity: "var(--rizzm-flip-from-bottom-opacity-end, 1)",
    },
  ],
  bounceIn: [
    {
      transform: "scale(var(--rizzm-bounce-in-scale-start, 0.3))",
      opacity: "var(--rizzm-bounce-in-opacity-start, 0)",
    },
    {
      transform: "scale(var(--rizzm-bounce-in-scale-mid, 1.1))",
      opacity: "var(--rizzm-bounce-in-opacity-mid, 1)",
      offset: 0.5,
    },
    {
      transform: "scale(var(--rizzm-bounce-in-scale-overshoot, 0.9))",
      opacity: "var(--rizzm-bounce-in-opacity-overshoot, 1)",
      offset: 0.7,
    },
    {
      transform: "scale(var(--rizzm-bounce-in-scale-end, 1))",
      opacity: "var(--rizzm-bounce-in-opacity-end, 1)",
      offset: 1,
    },
  ],
  rotateIn: [
    {
      transformOrigin: "var(--rizzm-rotate-in-transform-origin, center)",
      transform:
        "rotate3d(0, 0, 1, var(--rizzm-rotate-in-rotate-start, -200deg))",
      opacity: "var(--rizzm-rotate-in-opacity-start, 0)",
    },
    {
      transformOrigin: "var(--rizzm-rotate-in-transform-origin, center)",
      transform: "rotate3d(0, 0, 1, var(--rizzm-rotate-in-rotate-end, 0deg))",
      opacity: "var(--rizzm-rotate-in-opacity-end, 1)",
    },
  ],
};

export default RizzmKeyframes;

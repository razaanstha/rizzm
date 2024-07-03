const RizzmKeyframes = {
  fadeIn: {
    from: { opacity: "var(--fadeIn-start-opacity, 0)" },
    to: { opacity: "var(--fadeIn-end-opacity, 1)" },
  },
  fadeInUp: {
    from: {
      opacity: "var(--fadeInUp-start-opacity, 0)",
      transform: "translateY(var(--fadeInUp-start-translateY, 20px))",
    },
    to: {
      opacity: "var(--fadeInUp-end-opacity, 1)",
      transform: "translateY(var(--fadeInUp-end-translateY, 0))",
    },
  },
  fadeInDown: {
    from: {
      opacity: "var(--fadeInDown-start-opacity, 0)",
      transform: "translateY(var(--fadeInDown-start-translateY, -20px))",
    },
    to: {
      opacity: "var(--fadeInDown-end-opacity, 1)",
      transform: "translateY(var(--fadeInDown-end-translateY, 0))",
    },
  },
  fadeInLeft: {
    from: {
      opacity: "var(--fadeInLeft-start-opacity, 0)",
      transform: "translateX(var(--fadeInLeft-start-translateX, -20px))",
    },
    to: {
      opacity: "var(--fadeInLeft-end-opacity, 1)",
      transform: "translateX(var(--fadeInLeft-end-translateX, 0))",
    },
  },
  fadeInRight: {
    from: {
      opacity: "var(--fadeInRight-start-opacity, 0)",
      transform: "translateX(var(--fadeInRight-start-translateX, 20px))",
    },
    to: {
      opacity: "var(--fadeInRight-end-opacity, 1)",
      transform: "translateX(var(--fadeInRight-end-translateX, 0))",
    },
  },
  zoomIn: {
    from: {
      opacity: "var(--zoomIn-start-opacity, 0)",
      transform: "scale(var(--zoomIn-start-scale, 0.95))",
    },
    to: {
      opacity: "var(--zoomIn-end-opacity, 1)",
      transform: "scale(var(--zoomIn-end-scale, 1))",
    },
  },
  zoomInRotate: {
    from: {
      opacity: "var(--zoomInRotate-start-opacity, 0)",
      transform:
        "scale(var(--zoomInRotate-start-scale, 0.95)) rotate(var(--zoomInRotate-start-rotate, -5deg))",
    },
    to: {
      opacity: "var(--zoomInRotate-end-opacity, 1)",
      transform:
        "scale(var(--zoomInRotate-end-scale, 1)) rotate(var(--zoomInRotate-end-rotate, 0))",
    },
  },
  slideInUp: {
    from: {
      transform: "translateY(var(--slideInUp-start-translateY, 100%))",
    },
    to: {
      transform: "translateY(var(--slideInUp-end-translateY, 0))",
    },
  },
  slideInDown: {
    from: {
      transform: "translateY(var(--slideInDown-start-translateY, -100%))",
    },
    to: {
      transform: "translateY(var(--slideInDown-end-translateY, 0))",
    },
  },
  slideInLeft: {
    from: {
      transform: "translateX(var(--slideInLeft-start-translateX, -100%))",
    },
    to: {
      transform: "translateX(var(--slideInLeft-end-translateX, 0))",
    },
  },
  slideInRight: {
    from: {
      transform: "translateX(var(--slideInRight-start-translateX, 100%))",
    },
    to: {
      transform: "translateX(var(--slideInRight-end-translateX, 0))",
    },
  },
  flipInX: {
    from: {
      transform:
        "perspective(var(--flipInX-perspective, 400px)) rotate3d(1, 0, 0, var(--flipInX-start-rotate, 90deg))",
      opacity: "var(--flipInX-start-opacity, 0)",
    },
    to: {
      transform:
        "perspective(var(--flipInX-perspective, 400px)) rotate3d(1, 0, 0, var(--flipInX-end-rotate, 0deg))",
      opacity: "var(--flipInX-end-opacity, 1)",
    },
  },
  flipInY: {
    from: {
      transform:
        "perspective(var(--flipInY-perspective, 400px)) rotate3d(0, 1, 0, var(--flipInY-start-rotate, 90deg))",
      opacity: "var(--flipInY-start-opacity, 0)",
    },
    to: {
      transform:
        "perspective(var(--flipInY-perspective, 400px)) rotate3d(0, 1, 0, var(--flipInY-end-rotate, 0deg))",
      opacity: "var(--flipInY-end-opacity, 1)",
    },
  },
  bounceIn: {
    "0%": {
      opacity: "var(--bounceIn-0-opacity, 0)",
      transform: "scale(var(--bounceIn-0-scale, 0.3))",
    },
    "50%": {
      opacity: "var(--bounceIn-50-opacity, 1)",
      transform: "scale(var(--bounceIn-50-scale, 1.05))",
    },
    "70%": {
      transform: "scale(var(--bounceIn-70-scale, 0.9))",
    },
    "100%": {
      opacity: "var(--bounceIn-100-opacity, 1)",
      transform: "scale(var(--bounceIn-100-scale, 1))",
    },
  },
  rotateIn: {
    from: {
      transformOrigin: "var(--rotateIn-transformOrigin, center)",
      transform: "rotate3d(0, 0, 1, var(--rotateIn-start-rotate, -200deg))",
      opacity: "var(--rotateIn-start-opacity, 0)",
    },
    to: {
      transformOrigin: "var(--rotateIn-transformOrigin, center)",
      transform: "rotate3d(0, 0, 1, var(--rotateIn-end-rotate, 0deg))",
      opacity: "var(--rotateIn-end-opacity, 1)",
    },
  },
};

export default RizzmKeyframes;

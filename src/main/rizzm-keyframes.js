const RizzmKeyframes = {
  fadeIn: [
    { opacity: "var(--rizm-fadein-start-opacity, 0)" },
    { opacity: "var(--rizm-fadein-end-opacity, 1)" },
  ],
  fadeInUp: [
    {
      opacity: "var(--rizm-fadeinup-start-opacity, 0)",
      transform: "translateY(var(--rizm-fadeinup-start-translatey, 20px))",
    },
    {
      opacity: "var(--rizm-fadeinup-end-opacity, 1)",
      transform: "translateY(var(--rizm-fadeinup-end-translatey, 0))",
    },
  ],
  fadeInDown: [
    {
      opacity: "var(--rizm-fadeindown-start-opacity, 0)",
      transform: "translateY(var(--rizm-fadeindown-start-translatey, -20px))",
    },
    {
      opacity: "var(--rizm-fadeindown-end-opacity, 1)",
      transform: "translateY(var(--rizm-fadeindown-end-translatey, 0))",
    },
  ],
  fadeInLeft: [
    {
      opacity: "var(--rizm-fadeinleft-start-opacity, 0)",
      transform: "translateX(var(--rizm-fadeinleft-start-translatex, -20px))",
    },
    {
      opacity: "var(--rizm-fadeinleft-end-opacity, 1)",
      transform: "translateX(var(--rizm-fadeinleft-end-translatex, 0))",
    },
  ],
  fadeInRight: [
    {
      opacity: "var(--rizm-fadeinright-start-opacity, 0)",
      transform: "translateX(var(--rizm-fadeinright-start-translatex, 20px))",
    },
    {
      opacity: "var(--rizm-fadeinright-end-opacity, 1)",
      transform: "translateX(var(--rizm-fadeinright-end-translatex, 0))",
    },
  ],
  zoomIn: [
    {
      opacity: "var(--rizm-zoomin-start-opacity, 0)",
      transform: "scale(var(--rizm-zoomin-start-scale, 0.95))",
    },
    {
      opacity: "var(--rizm-zoomin-end-opacity, 1)",
      transform: "scale(var(--rizm-zoomin-end-scale, 1))",
    },
  ],
  zoomInRotate: [
    {
      opacity: "var(--rizm-zoominrotate-start-opacity, 0)",
      transform:
        "scale(var(--rizm-zoominrotate-start-scale, 0.95)) rotate(var(--rizm-zoominrotate-start-rotate, -5deg))",
    },
    {
      opacity: "var(--rizm-zoominrotate-end-opacity, 1)",
      transform:
        "scale(var(--rizm-zoominrotate-end-scale, 1)) rotate(var(--rizm-zoominrotate-end-rotate, 0))",
    },
  ],
  slideFromLeft: [
    { transform: "translate3d(-100%, 0, 0)" },
    { transform: "translate3d(0, 0, 0)" },
  ],
  slideFromRight: [
    { transform: "translate3d(100%, 0, 0)" },
    { transform: "translate3d(0, 0, 0)" },
  ],
  slideFromTop: [
    { transform: "translate3d(0, -100%, 0)" },
    { transform: "translate3d(0, 0, 0)" },
  ],
  slideFromBottom: [
    { transform: "translate3d(0, 100%, 0)" },
    { transform: "translate3d(0, 0, 0)" },
  ],
  flipFromLeft: [
    {
      transform:
        "perspective(var(--rizm-flipfromleft-perspective, 40em)) rotateY(var(--rizm-flipfromleft-start-rotate, -90deg))",
      opacity: "var(--rizm-flipfromleft-start-opacity, 0)",
    },
    {
      transform:
        "perspective(var(--rizm-flipfromleft-perspective, 40em)) rotateY(var(--rizm-flipfromleft-end-rotate, 0deg))",
      opacity: "var(--rizm-flipfromleft-end-opacity, 1)",
    },
  ],
  flipFromRight: [
    {
      transform:
        "perspective(var(--rizm-flipfromright-perspective, 40em)) rotateY(var(--rizm-flipfromright-start-rotate, 90deg))",
      opacity: "var(--rizm-flipfromright-start-opacity, 0)",
    },
    {
      transform:
        "perspective(var(--rizm-flipfromright-perspective, 40em)) rotateY(var(--rizm-flipfromright-end-rotate, 0deg))",
      opacity: "var(--rizm-flipfromright-end-opacity, 1)",
    },
  ],
  flipFromTop: [
    {
      transform:
        "perspective(var(--rizm-flipfromtop-perspective, 40em)) rotateX(var(--rizm-flipfromtop-start-rotate, 90deg))",
      opacity: "var(--rizm-flipfromtop-start-opacity, 0)",
    },
    {
      transform:
        "perspective(var(--rizm-flipfromtop-perspective, 40em)) rotateX(var(--rizm-flipfromtop-end-rotate, 0deg))",
      opacity: "var(--rizm-flipfromtop-end-opacity, 1)",
    },
  ],
  flipFromBottom: [
    {
      transform:
        "perspective(var(--rizm-flipfrombottom-perspective, 40em)) rotateX(var(--rizm-flipfrombottom-start-rotate, -90deg))",
      opacity: "var(--rizm-flipfrombottom-start-opacity, 0)",
    },
    {
      transform:
        "perspective(var(--rizm-flipfrombottom-perspective, 40em)) rotateX(var(--rizm-flipfrombottom-end-rotate, 0deg))",
      opacity: "var(--rizm-flipfrombottom-end-opacity, 1)",
    },
  ],
  bounceIn: [
    { transform: "scale(var(--rizm-bouncein-start-scale, 0.3))", opacity: "0" },
    {
      transform: "scale(var(--rizm-bouncein-end-scale, 1.1))",
      opacity: "1",
      offset: 0.5,
    },
    {
      transform: "scale(var(--rizm-bouncein-overshoot-scale, 0.9))",
      opacity: "1",
      offset: 0.7,
    },
    {
      transform: "scale(var(--rizm-bouncein-end-scale, 1))",
      opacity: "1",
      offset: 1,
    },
  ],
  rotateIn: [
    {
      transformOrigin: "var(--rizm-rotatein-transformorigin, center)",
      transform:
        "rotate3d(0, 0, 1, var(--rizm-rotatein-start-rotate, -200deg))",
      opacity: "var(--rizm-rotatein-start-opacity, 0)",
    },
    {
      transformOrigin: "var(--rizm-rotatein-transformorigin, center)",
      transform: "rotate3d(0, 0, 1, var(--rizm-rotatein-end-rotate, 0deg))",
      opacity: "var(--rizm-rotatein-end-opacity, 1)",
    },
  ],
};

export default RizzmKeyframes;

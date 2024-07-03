# Rizzm

Rizzm is a lightweight JavaScript library for animating elements as they enter the viewport. It provides smooth, customizable animations to enhance the user experience on your website.

## Features

- Easy to use with minimal setup
- Customizable animations through CSS variables
- Supports multiple selectors
- Efficiently handles dynamically added content
- Respects user preferences for reduced motion
- Browser compatibility checks
- Wide range of pre-defined, customizable keyframes

## Installation

You can install Rizzm using npm:

```bash
npm install rizzm
```

bun

```
bun add rizzm
```

Or include it directly in your HTML:

```html
COMING SOON
```

## Basic Usage

1. Include the Rizzm library in your project.
2. Add the `js-rizzm` class to elements you want to animate.
3. Initialize Rizzm in your JavaScript:

```javascript
import Rizzm from 'rizzm';

const rizzm = new Rizzm();
```

That's it! Elements with the `js-rizzm` class will now animate when they enter the viewport.

## Advanced Usage

### Custom Configuration

You can customize Rizzm's behavior by passing a configuration object:

```javascript
const rizzm = new Rizzm({
  selector: '.animate-me', // Custom selector
  options: {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    stagger: 100
  },
  customKeyframes: {
    // Your custom keyframes here
  },
  paused: false
});
```

### CSS Variables

Customize animations for individual elements using CSS variables:

```css
.my-element {
  --rizzm-duration: 800ms;
  --rizzm-keyframe: fadeInUp;
  --rizzm-stagger: 300;
}
```

Available CSS variables:
- `--rizzm-duration`: Animation duration in milliseconds
- `--rizzm-keyframe`: Name of the animation keyframe to use
- `--rizzm-stagger`: Delay between animations of multiple elements
- `--rizzm-from`: Custom 'from' state of the animation (as JSON string)
- `--rizzm-to`: Custom 'to' state of the animation (as JSON string)
- `--rizzm-prevent-animations`: Set to 'true' to prevent animation on an element

### Updating Elements

If you dynamically add new elements to the DOM, you can update Rizzm to include them:

```javascript
rizzm.updateElements();
```

You can also pass a new selector or elements:

```javascript
rizzm.updateElements('.new-elements');
// or
rizzm.updateElements(document.querySelectorAll('.new-elements'));
```

## Available Keyframes and Customization

Rizzm comes with a variety of pre-defined keyframes that you can use and customize. Here's a list of available keyframes and how to customize them:

1. `fadeIn`
2. `fadeInUp`
3. `fadeInDown`
4. `fadeInLeft`
5. `fadeInRight`
6. `zoomIn`
7. `zoomInRotate`
8. `slideInUp`
9. `slideInDown`
10. `slideInLeft`
11. `slideInRight`
12. `flipInX`
13. `flipInY`
14. `bounceIn`
15. `rotateIn`

Each keyframe can be customized using CSS variables. For example, to customize the `fadeInUp` animation:

```css
.my-element {
  --fadeInUp-start-opacity: 0.2;
  --fadeInUp-start-translateY: 40px;
  --fadeInUp-end-opacity: 0.9;
  --fadeInUp-end-translateY: 5px;
}
```

Here's a general pattern for the CSS variable names:

- `--[keyframeName]-start-[property]`: For the starting state of the animation
- `--[keyframeName]-end-[property]`: For the ending state of the animation

Some keyframes have additional properties:

- `flipInX` and `flipInY`: Use `--flipInX-perspective` and `--flipInY-perspective` to adjust the perspective
- `rotateIn`: Use `--rotateIn-transformOrigin` to set the transform origin

The `bounceIn` keyframe has multiple stages, which you can customize using percentage-based variables:

```css
.my-element {
  --bounceIn-0-opacity: 0.1;
  --bounceIn-0-scale: 0.2;
  --bounceIn-50-opacity: 0.8;
  --bounceIn-50-scale: 1.1;
  --bounceIn-70-scale: 0.95;
  --bounceIn-100-opacity: 1;
  --bounceIn-100-scale: 1;
}
```

By using these CSS variables, you can fine-tune each animation to perfectly fit your design needs.

## Browser Support

Rizzm uses the Intersection Observer API and Web Animations API. It includes checks for browser support and will gracefully degrade if these features are not available.

## Accessibility

Rizzm respects the user's "prefers-reduced-motion" setting and will not animate elements if this is enabled.

## Planned Features

[... keep the existing planned features section ...]

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
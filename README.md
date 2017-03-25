# back-top

Simple disappearing back-to-top button.

No dependencies, ES2015-ready.

Comes with almost no styling, allowing you to style it yourself.

---

**Note:** This library does not include smooth scrolling.

You can use `scroll-behavior`, but this does not yet have wide browser support. http://caniuse.com/#feat=css-scroll-behavior
```css
body {
  scroll-behavior: smooth;
}
```

Alternately, you can use something like https://github.com/tsuyoshiwada/sweet-scroll.

## Installation

```bash
npm install back-top
```

**ES2015:**
```js
import backTop from 'back-top';
```

**CommonJS:**
```js
var backTop = require('back-top');
```

**Browser Globals:**
```html
<script src="path/to/back-top.js"></script>
```

## Usage

`backTop` must be manually initialized.

```js
// Basic Usage:
backTop();

// Can pass options:
backTop({
  innerHTML: 'Up you go!',
});
```

### Options

- `innerHTML` Set the `innerHTML` of the button. Default is `Back to Top`.
- `id` Set the id of the button. By default, no `id` is set.
- `className` Set the class name (or space-separated list of class names) to apply to the button. By default, none are set.
- `offset` Distance from bottom-right to absolutely position the button. Default is `1rem`.

## License

[ISC](LICENSE)

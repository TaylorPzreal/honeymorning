# primary-style

Browser basic styles and useful class.

## Installation And Usage

```bash
yarn add primary-style
```

```js
import 'primary-style';
```

## Features

* Page defaults

From [Bootstrap](https://getbootstrap.com/docs/4.0/content/reboot/)

```HTML
The <html> and <body> elements are updated to provide better page-wide defaults. More specifically:

* The box-sizing is globally set on every element—including *::before and *::after, to border-box. This ensures that the declared width of element is never exceeded due to padding or border.

* No base font-size is declared on the <html>, but 16px is assumed (the browser default). font-size: 1rem is applied on the <body> for easy responsive type-scaling via media queries while respecting user preferences and ensuring a more accessible approach.

* The <body> also sets a global font-family, line-height, and text-align. This is inherited later by some form elements to prevent font inconsistencies.

* For safety, the <body> has a declared background-color, defaulting to #fff.
```

```css
html {
  box-sizing: border-box;
  line-height: 1.15; // Correct the line height in all browsers.
  height: 100%; // make full height
  -webkit-text-size-adjust: 100%; // 4
  -ms-text-size-adjust: 100%; // 4
  -ms-overflow-style: scrollbar; // 5
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); // 6
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

// 1. Set an explicit initial text-align value so that we can later use the
//    the `inherit` value on things like `<th>` elements.

body {
  background-color: #fff;
  color: #34374c;
  display: flex;
  flex-direction: column;
  font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
  font-size: 1rem;
  height: 100%;
  margin: 0;
  text-align: left; // 1
}
```

* Font size

Use class ___font-10___, the font size is 10px.
The size also could be oneof [10, 12, 14, 16, 18, 20, 22, 24, 28, 30, 32, 36, 48, 64, 72];

* Layout

${size} is oneOf

```js
[1, 2, 4, 5, 6, 8, 10, 12, 15, 16, 18, 20, 22, 24, 26, 28, 32, 48, 64, 72, 100, 120]
```

Support:

```css
.pl-${size} {
  padding-left: #{$size}px;
}
/* Others like this */
/*
pr-${size}
pt-${size}
pb-${size}

mr-${size}
ml-${size}
mt-${size}
mb-${size}
*/

.no-padding {
  padding: 0;
}
.no-margin {
  margin: 0;
}
.full-width {
  width: 100%;
}
.full-height {
  height: 100%;
}
```

* Definate Scrollbar default style

## Plan

* [ ] Add colors
* [ ] Could extention by scss variable

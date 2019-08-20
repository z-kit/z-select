# <a name="z-select"></a> z-select

[![Build]](https://travis-ci.org/z-kit/z-select) [![SemVer]](http://semver.org/) [![License]](LICENSE)

A basic styled select input for your web application

## <a name="toc"></a> Table of contents

- [z-select](#z-select)
- [Table of contents](#toc)
- [Install](#install)
  - [Import as HTML/CSS component](#import-css)
  - [Import as Stateless Functional Component (SFC)](#import-sfc)
- [How to use](#howto)
  - [CSS component](#css)
  - [Stateless Functional Component](#sfc)
- [Theming](#theming)
- [License](#license)

## <a name="install"></a> Install

The package is available to download through [npm](https://npmjs.com):

```bash
npm install z-select --save
```

### <a name="import-css"></a> Import as HTML/CSS component

### The simple case

The package will be located inside the `node_modules` folder, you can import it into the HTML document as follows:

```html
<link rel="stylesheet" href="node_modules/z-select/dist/style.css">
```

### When bundling an web app

**For bundlers that support CSS, like [Webpack](https://webpack.github.io/), you can use it like this:**

```javascript
require('z-select/dist/style.css');
```

### <a name="import-sfc"></a> Import as a Stateless Functional Component (SFC)

The package does not include the renderer, you can use any renderer that supports SFCs. You could use React, Preact, Inferno, etc.

**Notice: This package contains CSS styling, you may need a bundler that's capable of requiring CSS files like Webpack with [css-loader](https://github.com/webpack/css-loader).**

Once you have chosen the renderer you can include the package in your project as follows:

```jsx
// Assuming the React renderer is being used
const React = require('react');
const render = require('react-dom').render;

// Passing the render function when importing
const ZSelect = require('z-select')(React.createElement);

// Render it on page, using JSX here :)
render(<ZSelect />, document.body);
```

## <a name="howto"></a> How to use

### <a name="css"></a> CSS component

Just add the HTML structure and CSS classes to reproduce the UI component.

### Class hierarchy

|              Recommended HTML tags              | Parent |        Class         |                               Description                               |   Type   |
| ----------------------------------------------- | ------ | -------------------- | ----------------------------------------------------------------------- | -------- |
| `div`, `section`, `main`, `article`, `fieldset` | `root` | `.z-select`          | Root container                                                          | Block    |
| Any containing `.z-select`                      | root   | `.z-select--label`   | Makes space for a floating label                                        | Modifier |
| Any containing `.z-select`                      | root   | `.z-select--success` | Renders a green border to indicate success                              | Modifier |
| Any containing `.z-select`                      | root   | `.z-select--warning` | Renders a yellow border to indicate warning                             | Modifier |
| Any containing `.z-select`                      | root   | `.z-select--danger`  | Renders a reddish border to indicate danger                             | Modifier |
| Any containing `.z-select`                      | root   | `.z-select--error`   | Renders a red border to indicate error                                  | Modifier |
| Any containing `.z-select`                      | root   | `.z-select--dark`    | Makes the select text white so it can be read easier on dark backgrounds | Modifier |
| Any containing `.z-select`                      | root   | `.z-select__label`   | Renders a floating label                                                | Element  |

#### Full working example:

```html
<div class="z-select">
  <select>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
</div>
```

### <a name="sfc"></a> Stateless Functional Component

Render the HTML by using the SFC and passing props.

### Supported Props

|    Prop name    |     Expected Type      |                                     Description                                      |
| --------------- | ---------------------- | ------------------------------------------------------------------------------------ |
| `label`         | `string` or `TextNode` | The floating label to render                                                         |
| `selectedIndex` | `number`               | The index of the selected option (optional)                                          |
| `color`         | `string`               | A custom border color that you might pass to override the defaults                   |
| `success`       | `boolean`              | Pass true to indicate success and render a green border                              |
| `warning`       | `boolean`              | Pass true to indicate warning and render a yellow border                             |
| `danger`        | `boolean`              | Pass true to indicate danger and render a reddish border                             |
| `error`         | `boolean`              | Pass true to indicate error and render a red border                                  |
| `dark`          | `boolean`              | Pass true to indicate the input is in a dark background and input text will be white |

**Note that you can pass any attribute compatible with `select` that it will be automatically passed through.**

#### Full example (JSX):

```jsx
<ZSelect placeholder="Choose one" options={['A', 'B', 'C']} />
```

## <a name="theming"></a> Theming

You can theme `z-select` using CSS Variables!

The list of variables available is below:

|        Variable        | Expected type |                   Description                   |
| ---------------------- | ------------- | ----------------------------------------------- |
| --primary-color        | `color`       | The border-color for selected inputs            |
| --success-color        | `color`       | The border-color for selected success inputs    |
| --warning-color        | `color`       | The border-color for selected warnings inputs   |
| --danger-color         | `color`       | The border-color for selected danger inputs     |
| --error-color          | `color`       | The border-color for selected errored inputs    |
| --neutral-border-color | `color`       | The border-color for idle inputs                |
| --neutral-color        | `color`       | The text color for placeholders/floating labels |
| --dark-color           | `color`       | The background color for input labels           |

## <a name="license"></a> LICENSE

[MIT](LICENSE)

[Build]: https://img.shields.io/travis/z-kit/z-select.svg
[SemVer]: https://img.shields.io/:semver-%E2%9C%93-brightgreen.svg
[License]: https://img.shields.io/npm/l/z-select.svg
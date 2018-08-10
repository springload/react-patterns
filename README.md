<p align="center">
  <img width="245" height="378" src="/logo.png" alt="React Patterns"><br>
  <i>A pattern library system designed to be easier to maintain</i>
</p>

# Install

    npm install react-patterns

    yarn add react-patterns

# What is a Pattern Library?

A pattern library (part of a Style Guide or a Design System), is a way of documenting usage of components and how they're made with HTML, CSS, and other assets.

Having this documented can help siloed teams or different vendors coordinate to achieve design consistency.

## What is React-Patterns?

A component that autodetects the HTML and CSS of your components, and provides a download cart.

## How can I make a pattern library with React-Patterns?

One of the advantages of react-patterns is that it detects the CSS Rules being applied, so you can put your production site's CSS files on the page and write HTML that uses them and react-patterns will only display the relevant CSS. This means that a lot less effort to repurpose your existing CSS as a pattern library.

Usage:

```javascript
import React from "react";
import Pattern from "react-patterns";
import "h6.css"; // contains h6 { color: red; }

export default () => (
  <main>
    <header>Heading Patterns</header>
    <Pattern>
      <h6>My Heading 6</h6>
    </Pattern>
  </main>
);
```

Will look like

<blockquote><header>Heading Patterns</header><div><h6>My Heading 6</h6><details><summary>HTML</summary>&lt;h6&gt;My Heading 6&lt;/h6&gt;</details><details><summary>CSS</summary>h6 { color: red; }</details></div></blockquote>

### Syntax Highlighting

<p>Use `react-patterns/theme/solarize.css`.</p>

## Demo

* [LIC Pattern Library](https://springload.github.io/lic-pattern-library/)

## This is a pattern library so where's the dev webserver?

Great question.

`react-patterns` doesn't include a dev server because other projects do it better.

So instead just use <a href="https://github.com/facebookincubator/create-react-app">Create-React-App</a> or, add `<Pattern>` tags to a new route in your existing app, or use whatever boilerplate you like.

## How does react-patterns organise the page of patterns... with headings, accordions, tabs, or what?

<p>Here's a hypothetical... if your pattern library had 5 components then it probably should be organised quite differently to another library with 1000 components, so this software is intentionally unopinionated about the presentation of your components. react-patterns just tries to do one thing well -- rendering the component preview. Decide for yourself how to organise them (do try <a href="https://github.com/springload/react-accessible-accordion/">`react-accessible-accordion`</a> though!).</p>

<p>So, long story short, it doesn't organise them, so design it however you want!</p>

## Features

<ul>
 <li> [x] Minimal
 <li> [x] React
 <li> [x] CSS Rule Autodetection, so there's no need to manually associate CSS with a component
 <li> [x] ZIP download of particular components
 <li> [x] HTML beautifier
 <li> [x] CSS beautifier
 <li> [x] CSS rule whitelist and blacklist. Pass in 'blacklist' prop with value of 'stylesheet' to string match against attributes of `&lt;link&gt;` or `&lt;style&gt;`, 'stylesheets' to pass in an array of those, or 'rule' to match against selectors, or rules for an array of those.
 <li> [x] CSS Rule whitelist (probably only useful to opt-in specific stylesheets while ignoring others)
 <li> [x] Render prop overrides for HTML and CSS
</ul>

## Props

All props are optional. The only requirement is a wrapped node.

<table>
<tr><th>noCart</th><td>Disable cart</td></tr>
<tr><th>filename</th><td>Choose the cart ZIP filename for the HTML</td></tr>
<tr><th>whitelist</th><td>A whitelist of types of CSS to include. An Object or an array of Objects like ```javascript
{ stylesheet: '', rule: 'substring', media: 'matches' }```</td></tr>
<tr><th>blacklist</th><td>A blacklist of types of CSS to include. An Object or an array of Objects like ```javascript
{ stylesheet: '', rule: 'substring', media: 'matches' }```. Use this to exclude your CSS fo</td></tr>
  <tr><th colspan="2">Render props</th></tr>
  <tr><th>renderChildren</th><td>A render prop to wrap `children` prop</td></tr>
  <tr><th>renderHTML</th><td>A render prop to wrap autodetected HTML.</td></tr>
  <tr><th>renderCSS</th><td>A render prop to wrap autodetected CSS.</td></tr>
</table>

## Roadmap

<ul>
  <li> [ ] ...and show prop types, somehow? (`prop-types` or Flow/TS?). Sadly I'm not sure how we could support FlowType/TypeScript types because those are removed at compile-time.
 <li> [ ] Detect basic JSX React Components... this is almost working
 <li> [ ] Make it support interactive components (eg accumulating CSS across these multiple states).
  <li> [ ] Parse SourceMaps to derive Sass (etc) if possible.
</ul>

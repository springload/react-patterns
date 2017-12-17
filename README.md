# pattern-book.js

It's not a pattern library, it's a pattern book, so make your own library.

It wraps arbitrary HTML or React Components and displays them as HTML, JSX, and CSS.

Usage:

```
import React, { Component } from 'pattern-book';
import Book from 'pattern-book';

export default class PatternLibrary {
    render() {
        <Book>
            <h1>My Heading</h1>
        </Book>
    }
}
```

It will then render something like,

<blockquote>
    <details><summary>HTML</summary>&lt;h1&gt;My Heading&lt;/h1&gt;</details>
    <details><summary>JSX</summary>&lt;h1&gt;My Heading&lt;/h1&gt;</details>
    <details><summary>CSS</summary>h1 { color: red; }</details>
# My Heading
</blockquote>

The HTML and JSX are so that you can expose different types of markup.

The CSS is automatically derived from the CSS that's applied to the elements (it uses browser APIs to determine this, so there's no need to manually associate rules).

## FAQ

### Q. Where's the dev server with hot reloading?

I don't know. Just use [Create-React-App](https://github.com/facebookincubator/create-react-app) or whatever boilerplate you like.

### Q. How do I organise the books with accordian sections, or titles?

Well `pattern-book` just renders the component preview so use [react-accessible-accordion](https://github.com/springload/react-accessible-accordion/), or put headings between them. Design it however you want.

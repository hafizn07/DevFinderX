## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
- Researched `prefers-color-scheme` in CSS.

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [GitHub](https://github.com/hafizmp/DevFinder)
- Live Site URL: [DEVfinderX](https://devfinderx.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

- Learned using var() for colors in CSS.

```css
--body-bg-color-: #f6f8ff;

body {
    background-color: var(--body-bg-color-);
}
```
- Working with APIs

```js
  const url = `https://api.github.com/users/${input.value}`;
  async function getUrl() {
    const response = await fetch(url);
    const data = await response.json();
    
    //
    
}
```

- Switch between Themes in the App.

```js
const toggle = function (e) {....}
toggleColorButtons.forEach((btn) => {...})
```



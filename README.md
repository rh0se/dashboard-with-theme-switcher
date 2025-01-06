# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [solution URL](https://github.com/rh0se/dashboard-with-theme-switcher)
- Live Site URL: [live site](https://social-media-dashboard-with-theme-switcher-swart.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Tailwind CSS
- [React](https://reactjs.org/) - JS library

### What I learned

```js
const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((isDarkTheme) => !isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### Continued development

### Useful resources

- [Web Dev Simplified](https://youtu.be/5LrDIWkK_Bc?si=-L1G9q14Ou1MYhWO) - This helped me im[]

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Author

- Linkedin - [Rhoda](https://www.linkedin.com/in/rhoda-ojetola)
- Twitter - [@NerdySimi](https://twitter.com/NerdySimi)
- Frontend Mentor - [@Rhoda](https://www.frontendmentor.io/profile/rh0se)

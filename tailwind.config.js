/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'custom-gradient': 'linear-gradient(to bottom, #1e1e2f, rgba(255, 255, 255, 0.8), #ffffff)',
        'Lime-Green': 'hsl(163, 72%, 41%)',
        'BrightRed': 'hsl(356, 69%, 56%)',
        'Facebook-color': 'hsl(208, 92%, 53%)',
        'Twitter-color': 'hsl(203, 89%, 53%)',
        'Instagram-color1': 'hsl(37, 97%, 70%)',
        'Instagram-color2': 'hsl(329, 70%, 58%)',
        'YouTube': 'hsl(348, 97%, 39%)',
        'darkToggle1': 'hsl(210, 78%, 56%)',
        'darkToggle2': 'hsl(146, 68%, 55%)',
        'lightToggle1': 'hsl(230, 22%, 74%)',
        'VeryDarkBlue' /*(BG)*/: 'hsl(230, 17%, 14%)',
        'VeryDarkBlueTop' /*(Top BG Pattern)*/: 'hsl(232, 19%, 15%)','DarkDesaturatedBlue' /* (Card BG)*/: 'hsl(228, 28%, 20%)','DesaturatedBlue' /*(Text)*/: 'hsl(228, 34%, 66%)',
        'White': 'hsl(0, 0%, 100%)',
        'VeryPaleBlue' /*(Top BG Pattern)*/: 'hsl(225, 100%, 98%)',
        'LightGrayishBlue' /*(Card BG)*/: 'hsl(227, 47%, 96%)',
        'DarKGrayishBlue '/*(Text)*/: 'hsl(228, 12%, 44%)',
        'darkGradient': 'linear-gradient(to bottom, hsl(232, 19%, 15%) 20%, hsl(230, 17%, 14%) 20% 100%)'
      },
    },
  },
  plugins: [],
}


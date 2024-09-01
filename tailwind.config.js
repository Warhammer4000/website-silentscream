/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        silent_pink1: "#8D008D",
        silent_pink2: "#840909",
        silent_bg1: "#999999",
      },
      backgroundImage: {
        "hero-bg": "url('../../public/assets/herobanner/SilentScreamBGLarge.png')",
        "button-bg1": "url('../../public/assets/button.png')",
        "bg-web-s": "url('../../public/assets/webbgS.png')",
        "bg-web-m": "url('../../public/assets/webbgM.png')",
        "bg-web-l": "url('../../public/assets/webbgL.png')",
        "bg-mob-s": "url('../../public/assets/mobbgS.png')",
        "bg-mob-m": "url('../../public/assets/mobbgM.png')",
        "bg-mob-l": "url('../../public/assets/mobbgL.png')",
        "bg-skull": "url('../../public/assets/silentScreamSkull.png')",
      },
    },
  },
  plugins: [],
};

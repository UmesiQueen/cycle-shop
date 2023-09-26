/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "global-color-0": "#df453e",
        "global-color-1": "#b62d25",
        "global-color-2": "#161616",
        "global-color-3": "#4b4f58",
        "global-color-4": "#f5f5f5",
        "global-color-5": "#ffffff",
        "global-color-6": "#f2f5f7",
        "global-color-7": "#424242",
        "global-color-8": "#000000",
      },
      accentColor: {
        "code-block-background": "#eeeeee",
        "comment-inputs-background": "#fafafa",
      },
      fontFamily: {
        Racing_Sans_One: ["Racing_Sans_One"],
        DM_Sans: ["DM_Sans"],
      },
    },
  },
  plugins: [],
};

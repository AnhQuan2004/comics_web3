/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "neon-pink": "#FF00FF",
        "neon-lime": "#CCFF00",
        "neon-blue": "#00FFFF",
        "neon-purple": "#bf00ff",
        "neon-yellow": "#FFFF00",
        "brand-bg": "#F0F0F0",
        "brand-dark": "#111111",
        "brutal-red": "#FF3333",
      },
      fontFamily: {
        display: ["Anton", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      boxShadow: {
        hard: "8px 8px 0px #111111",
        "hard-sm": "4px 4px 0px #111111",
        "hard-xl": "16px 16px 0px #111111",
        "hard-pink": "8px 8px 0px #FF00FF",
        "hard-blue": "8px 8px 0px #00FFFF",
        "hard-lime": "8px 8px 0px #CCFF00",
        "hard-purple": "8px 8px 0px #bf00ff",
        "hard-yellow": "8px 8px 0px #FFFF00",
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        "marquee-reverse": "marquee 20s linear infinite reverse",
        "float-1": "float-1 15s ease-in-out infinite",
        "float-2": "float-2 12s ease-in-out infinite",
        "spin-slow": "spin 10s linear infinite",
        "bounce-fast": "bounce 0.5s infinite",
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "float-1": {
          "0%, 100%": {
            transform:
              "translateY(0px) translateX(0px) rotate(0deg)",
          },
          "25%": {
            transform:
              "translateY(-20px) translateX(10px) rotate(5deg)",
          },
          "50%": {
            transform:
              "translateY(0px) translateX(20px) rotate(0deg)",
          },
          "75%": {
            transform:
              "translateY(20px) translateX(10px) rotate(-5deg)",
          },
        },
        "float-2": {
          "0%, 100%": { transform: "translateY(0px) rotate(10deg)" },
          "50%": { transform: "translateY(-30px) rotate(-10deg)" },
        },
      },
    },
  },
  plugins: [],
};

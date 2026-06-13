import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pastel-meets-pop palette. Tweak the hex values to rebrand the whole site.
        taro: {
          DEFAULT: "#9B6FD6",
          light: "#C9A8F0",
          dark: "#6E45A8",
        },
        matcha: {
          DEFAULT: "#8FC079",
          light: "#C2E0AE",
          dark: "#5E9344",
        },
        peach: {
          DEFAULT: "#FF9E7D",
          light: "#FFC6AF",
          dark: "#F2774E",
        },
        cream: {
          DEFAULT: "#FFF8EF",
          dark: "#F6EAD9",
        },
        berry: {
          DEFAULT: "#FF6FA5",
          dark: "#E04A85",
        },
        ink: "#3A2E4A",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        blob: "60% 40% 55% 45% / 45% 55% 45% 55%",
      },
      boxShadow: {
        pop: "0 10px 40px -10px rgba(155, 111, 214, 0.35)",
        "pop-peach": "0 10px 40px -10px rgba(242, 119, 78, 0.4)",
        soft: "0 8px 30px -12px rgba(58, 46, 74, 0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-24px) rotate(6deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        bobble: {
          "0%, 100%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-3px)" },
          "75%": { transform: "translateY(3px)" },
        },
        "rise-in": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        wiggle: "wiggle 2.5s ease-in-out infinite",
        bobble: "bobble 3s ease-in-out infinite",
        "rise-in": "rise-in 0.7s ease-out both",
        "spin-slow": "spin-slow 26s linear infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;

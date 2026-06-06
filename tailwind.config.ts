import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mango: {
          300: "#ffd166",
          400: "#ffb84d",
          500: "#f5a623",
          600: "#ff7a1a"
        },
        ink: {
          950: "#070707",
          900: "#0d0d0d",
          850: "#111111",
          800: "#171717"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Inter", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 50px rgba(245, 166, 35, 0.24)"
      }
    }
  },
  plugins: []
};

export default config;

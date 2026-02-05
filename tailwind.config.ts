import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{json,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#071326",
          900: "#0b1a33",
          800: "#122447"
        },
        teal: {
          500: "#c8102e",
          400: "#e33b4d"
        }
      },
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
        heading: ["Sora", "sans-serif"]
      },
      backgroundImage: {
        "radar": "radial-gradient(circle at 15% 15%, rgba(12,63,134,0.25), transparent 50%), radial-gradient(circle at 75% 20%, rgba(200,16,46,0.18), transparent 45%), radial-gradient(circle at 70% 70%, rgba(12,63,134,0.12), transparent 55%)",
        "grid": "linear-gradient(rgba(12,63,134,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(12,63,134,0.16) 1px, transparent 1px)"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(12,63,134,0.25), 0 20px 50px rgba(5,15,32,0.55)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.6s ease forwards"
      }
    }
  },
  plugins: [typography]
};

export default config;

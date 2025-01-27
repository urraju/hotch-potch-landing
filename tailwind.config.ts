import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gradientL : "var(--gradientL)",
        gradientR : "var(--gradientR)",
        bgHoverL : "var(--bgHoverL)",
        bgHoverR : "var(--bgHoverR)",
        paragraph2 : "var(--paragraph2)",
        paragraph1 : "var(--paragraph1)",
        lightBlue : "var(--lightBlue)",

      },
      fontFamily : {
        outfit : "var(--outfit)",
        inter : "var(--inter)",
      }
    },
  },
  plugins: [],
} satisfies Config;

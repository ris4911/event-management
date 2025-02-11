import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: "#005DFF",
        "blue-3538CD": "#3538CD",
        "blue-EEF4FF": "#EEF4FF",
        "blue-label": "#175CD3",
        "blue-F4F9FF": "#F4F9FF",
        "light-blue": "#EFF8FF",
        green: "#31C65A",
        "green-15A31B": "#15A31B",
        "light-green": "#ECFDF3",
        orange: "#FF8A00",
        "light-orange": "#fff5c1",
        red: "#EA4141",
        "light-red": "#FFE8E8",
        purple: "#6941C6",
        "light-purple": "#F9F5FF",
        "body-text-color": "var(--body-text-color)",
        "black-161616": "#161616",
        "gray-898989": "#898989",
        "gray-f7f8f9": "#f7f8f9",
        "gray-CACACA": "#CACACA",
        "border-color": "#D9D9D9",
        "gray-D5D5D5": "#D5D5D5",
        "gray-F2F4F7": "#F2F4F7"
      },
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
      fontSize: {
        "body-1": ["24px", "28px"],
        "body-2": ["16px", "20px"],
        "body-3": ["12px", "16px"],
      },
    },
  },
  plugins: [],
} satisfies Config;

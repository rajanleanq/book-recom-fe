import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#0067FF",
        "primary-black": "#333333",
        grey: "#757575",
        "footer-bg": "#050A24",
      },
      fontSize: {
        h1: "38px",
        h2: "32px",
        h3: "28px",
        h4: "24px",
        h5: "20px",
        h6: "16px",
        p: "14px",
        "p-sm": "12px",
        link: "16px",
        btn: "16px",
      },
      lineHeight: {
        h1: "60px",
        h2: "48px",
        h3: "42px",
        h4: "36px",
        h5: "30px",
        h6: "24px",
        p: "24px",
        "p-sm": "18px",
        link: "24px",
        btn: "24px",
      },
      fontWeight: {
        h1: "700",
        h2: "700",
        h3: "700",
        h4: "600",
        h5: "700",
        h6: "700",
        p: "400",
        "p-sm": "500",
        link: "600",
        btn: "700",
      },
    },
  },
  plugins: [],
};
export default config;

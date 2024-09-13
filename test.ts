const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"black-rgba": "rgba(255, 255, 255, 0.1)",
				whitepage: "rgba(255, 255, 255, 1)",
				"br-light": "#474a4d",
				"br-dashboard": "#384256",
				body: "#1b1b1f",
			},
			boxShadow: {
				100: "0px 1px 5px -1px rgba(0,0,0, 0.2)",
				200: "1px 2px 5px -2px rgba(0,0,0, 0.3)",
				300: "1px 2px 5px -2px rgba(0,0,0, 0.4), -1px 0px 2px rgba(0,0,0,0.2)",
			},
			borderRadius: {
				sm: "3px",
			},
			animation: {
				scroll:
					"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
				"meteor-effect": "meteor 5s linear infinite",
			},
			keyframes: {
				scroll: {
					to: {
						transform: "translate(calc(-50% - 0.5rem))",
					},
				},
				meteor: {
					"0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
					"70%": { opacity: "1" },
					"100%": {
						transform: "rotate(215deg) translateX(-500px)",
						opacity: "0",
					},
				},
			},
			fontFamily: {
				headerName: ["Great Vibes"],
				kinn: ["Kinn", "Helvetica", "Arial", "sans-serif"],
				poppins: ["Poppins", "Arial", "sans-serif"],
			},
			fontSize: {
				tiny: ["0.6rem", { lineHeight: "1" }],
				base: ["0.9rem", { lineHeight: "1.4" }],
				regular: ["clamp(0.8rem, 1vw, 0.95rem)", { lineHeight: "1.2" }],
				subtitle: "clamp(1.2rem, 1vw, 20px)",
				secondary: ["clamp(1.6rem, 3vw, 32px) ", { lineHeight: "1.2" }],
				primary: ["clamp(1.8rem, 5vw, 40px)", { lineHeight: "1.1" }],
			},
		},
	},
	plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}

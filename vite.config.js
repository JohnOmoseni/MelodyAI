import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs/promises";

import path from "node:path";

export default defineConfig(() => ({
	plugins: [react()],
	esbuild: {
		loader: "jsx",
		include: /src\/.*\.jsx?$/,
		exclude: [],
	},
	resolve: {
		alias: {
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@constants": path.resolve(__dirname, "./src/constants"),
			"@redux": path.resolve(__dirname, "./src/redux"),
			"@schema": path.resolve(__dirname, "./src/schema"),
			"@data": path.resolve(__dirname, "./src/dashboard/data"),
			"@lib": path.resolve(__dirname, "./src/lib"),
			"@chatbot": path.resolve(__dirname, "./src/chatbot"),
		},
	},
	optimizeDeps: {
		esbuildOptions: {
			plugins: [
				{
					name: "load-js-files-as-jsx",
					setup(build) {
						build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
							loader: "jsx",
							contents: await fs.readFile(args.path, "utf8"),
						}));
					},
				},
			],
		},
	},
}));

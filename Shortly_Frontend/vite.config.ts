import {defineConfig} from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
	base: '/',
	plugins: [react(), tailwindcss()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/setupTests.ts', 
	},
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { splitVendorChunkPlugin } from 'vite';
import { compression } from 'vite-plugin-compression2';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		splitVendorChunkPlugin(),
		compression({
			algorithm: 'gzip',
			exclude: [/\.(br)$/, /\.(gz)$/],
		}),
	],
	build: {
		minify: 'terser',
		rollupOptions: {
			output: {
				manualChunks: {
					'react-vendor': ['react', 'react-dom'],
					'ui-vendor': ['framer-motion', 'react-icons'],
				},
			},
		},
	},
	server: {
		hmr: true,
	},
});

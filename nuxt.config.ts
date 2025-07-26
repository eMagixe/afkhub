import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: { enabled: false },
	modules: ['@nuxt/icon'],
	icon: {
		serverBundle: {
			collections: ['uil']
		}
	},
	vite: {
		server: {
			allowedHosts: ['afkhub.ru']
		},
		plugins: [tailwindcss()]
	},
	css: ['~/assets/css/main.css'],
	runtimeConfig: {
		public: {
			API: process.env.API_BASE_URL
		}
	}
})

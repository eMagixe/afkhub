<script setup lang="ts">
import { darkTheme, NConfigProvider, NLoadingBarProvider } from 'naive-ui'
import TopMenu from '~/components/TopMenu.vue'

const themeOverrides = {
	common: {
		primaryColor: '#aa74cf',
		primaryColorHover: '#404040'
	},
	LoadingBar: {
		color: '#aa74cf',
		height: '4px',
		opacity: '0.8',
		transitionDuration: '0.3s'
	}
}
</script>

<template>
	<n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides">
		<n-loading-bar-provider>
			<ClientOnly>
				<TopMenu />
			</ClientOnly>
			<NuxtPage />
		</n-loading-bar-provider>
	</n-config-provider>
</template>

<style scoped></style>

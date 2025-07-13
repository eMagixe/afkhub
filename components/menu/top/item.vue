<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
	to: {
		type: String,
		default: '/'
	},
	label: {
		type: String,
		default: ''
	},
	children: {
		type: Array,
		default: () => []
	}
})
</script>

<template>
	<NuxtLink class="h-14 p-4 text-white hover:bg-[#CD98F1FF] hover:text-[#57396BFF]" :to="to">
		{{ label }}
	</NuxtLink>
</template>

<style scoped></style>

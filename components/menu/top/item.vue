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
	},
	align: {
		type: String,
		default: 'start'
	}
})
</script>

<template>
	<NuxtLink
		:class="`h-14 w-32 p-4 text-white hover:bg-[#CD98F1FF] hover:text-[#57396BFF] flex justify-${align}`"
		:to="to"
	>
		{{ label }}
	</NuxtLink>
</template>

<style scoped></style>

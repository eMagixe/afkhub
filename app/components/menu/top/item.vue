<script setup lang="ts">
import { defineProps } from 'vue'

const {
	to = '/',
	label = '',
	icon = '',
	align = 'start'
} = defineProps({
	to: String,
	label: String,
	align: String,
	icon: String
})
</script>

<template>
	<NuxtLink
		:class="`h-14 min-w-32 p-4 text-white hover:bg-[#3d76ad] hover:text-cyan-400 flex justify-${align} items-center gap-2`"
		:to="to"
	>
		<Icon v-if="icon" :name="icon" style="font-size: 18px" />
		<p>{{ label }}</p>
	</NuxtLink>
</template>

<style scoped></style>

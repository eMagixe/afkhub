<script setup lang="ts">
import type { MenuOption } from '#shared/types'
import { useCategory } from '~/composibles/useCategory'

const hoveredItem = ref<MenuOption | null>(null)
const hovered = ref(false)

const hover = (item: MenuOption) => {
	hovered.value = true
	hoveredItem.value = item
}

const leave = () => {
	hovered.value = false
}

const { menuOptions, loadCategory, newsCategories } = useCategory()

loadCategory()
</script>

<template>
	<div class="relative flex justify-start items-center bg-primary max-h-14">
		<div class="text-neutral-700 text-[20px] mx-8">AFK<span class="text-white">hub</span>.ru</div>
		<template v-for="item in menuOptions">
			<MenuTopItem align="center" @mouseenter="hover(item)" :to="item.to" :label="item.label" :icon="item.icon" />
		</template>
		<div
			v-if="hovered"
			@mouseleave="leave"
			class="w-full h-auto absolute left-0 top-14 bg-[#3d76ad] opacity-90 text-white flex flex-col justify-start items-start p-4"
		>
			<template v-for="subitem in newsCategories">
				<MenuTopItem :to="subitem.to" :label="subitem.label" :icon="subitem.icon" />
			</template>
		</div>
	</div>
</template>

<style>
.test {
	background-color: #3d76ad;
}
</style>

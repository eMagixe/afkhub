<template>
	<div class="flex justify-start items-center bg-primary h-14">
		<div class="text-neutral-700 text-[20px] mx-8">AFK<span class="text-white">hub</span>.ru</div>
		<MenuTopItem v-for="item in menuOptions" :to="item.to" :label="item.label" :children="item.children" />
	</div>
</template>

<script setup lang="ts">
import type { MenuOption } from '#shared/types'

const menuOptions: MenuOption[] = [
	{
		label: 'Новости',
		icon: '',
		children: [
			{
				label: 'Категории',
				children: [
					{
						label: 'Все'
					},
					{
						label: 'Технологии'
					},
					{
						label: 'Игры'
					}
				]
			}
		]
	}
]
</script>

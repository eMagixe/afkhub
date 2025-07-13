<template>
	<div class="flex justify-start items-center bg-primary h-14">
		<div class="text-neutral-700 text-[20px] mx-8">AFK<span class="text-white">hub</span>.ru</div>
		<n-menu
			class="flex justify-center items-center border-l-neutral-700 border-l-1"
			v-model:value="activeKey"
			mode="horizontal"
			:options="menuOptions"
			responsive
		/>
	</div>
</template>

<script setup lang="ts">
import { type MenuOption, NIcon, NMenu } from 'naive-ui'
import { Newspaper } from '@vicons/fa'

const activeKey = ref(null)

const renderIcon = (icon: Component) => {
	return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
	{
		label: 'Новости',
		key: 'news',
		icon: renderIcon(Newspaper),
		children: [
			{
				type: 'group',
				label: 'Категории',
				key: 'categories',
				children: [
					{
						label: 'Все',
						key: 'all'
					},
					{
						label: 'Технологии',
						key: 'tech'
					},
					{
						label: 'Игры',
						key: 'games'
					}
				]
			}
		]
	}
]
</script>

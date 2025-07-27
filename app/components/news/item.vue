<script setup lang="ts">
import { type Article, type Category } from '#shared/types'
import { useCategory } from '~/composibles/useCategory'

const { getCategoryByUUID, loadCategory, allCategories } = useCategory()

if (allCategories.value.length === 0) {
	loadCategory()
}

const { item } = defineProps<{
	item: Article
}>()

const api = useRuntimeConfig().public.API
</script>

<template>
	<div
		class="w-full flex flex-col sm:flex-row hover:bg-neutral-700 cursor-pointer justify-start items-start border-b-1 border-r-1 border-[#3b3b40]"
	>
		<picture class="w-full h-full max-h-[600px]">
			<img class="article-cover" :src="`${api}/assets/${item.cover}`" alt="cover" />
		</picture>
		<div class="w-full h-full p-8">
			<h2 class="text-primary">{{ item.name }}</h2>
			<div size="small" class="mb-4 text-white inline-flex gap-1">
				<tags-item v-for="category in item.categories as Category[]">
					{{ getCategoryByUUID(category.categories_uuid || '') }}
				</tags-item>
			</div>
			<div class="text-white" v-if="item.short_content" v-html="item.short_content"></div>
		</div>
	</div>
</template>

<style scoped>
.article-cover {
	object-fit: cover;
	object-position: center;
	width: 100%;
	height: 100%;
}
</style>

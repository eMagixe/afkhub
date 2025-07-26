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
		class="w-full flex flex-col sm:flex-row hover:bg-neutral-700 cursor-pointer justify-start items-center border-b-1 border-r-1 border-[#3b3b40]"
	>
		<div
			class="w-full min-h-[450px] h-full article-cover"
			:style="`background-image: url(${api}/assets/${item.cover});`"
		></div>
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
	background-size: cover;
	background-position: center;
}
</style>

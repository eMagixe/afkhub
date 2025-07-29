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

const shortContent = computed(() => {
	return item.content.rendered.length > 350 ? item.content.rendered.substring(0, 350) + '...' : item.content.rendered
})

const goToArticles = () => {
	const slug = item.slug
	if (item.slug === '') {
		return
	} else {
		navigateTo(`/articles/${slug}`)
	}
}
</script>

<template>
	<div class="w-full flex flex-col sm:flex-row justify-start items-start border-b-1 border-r-1 border-[#3b3b40]">
		<picture class="w-full h-[500px]">
			<img class="article-cover" :src="`${item.media.source_url}`" alt="cover" />
		</picture>
		<div class="w-full h-[500px] flex flex-col justify-between items-center">
			<h2
				class="text-primary inline-flex justify-start items-center p-8 w-full"
				v-html="item.title.rendered"
			></h2>
			<div size="small" class="mb-4 text-white inline-flex gap-1">
				<tags-item v-for="category in item.categories as Category[]">
					{{ getCategoryByUUID(category.id) }}
				</tags-item>
			</div>
			<div class="text-white article-content p-8" v-if="shortContent" v-html="shortContent"></div>
			<div
				@click="goToArticles"
				class="w-full h-[60px] cursor-pointer flex justify-center items-center hover:bg-neutral-700 text-primary"
			>
				<p>Подробнее</p>
			</div>
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

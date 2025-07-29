<script setup lang="ts">
import { useArticle } from '~/composibles/useArticle'
import Spinner from '~/components/chared/spinner.vue'
import type { Article } from '#shared/types'
import { useTemplateRef } from 'vue'
import { useElementVisibility } from '@vueuse/core'
import { useCategory } from '~/composibles/useCategory'

const loader = useTemplateRef<HTMLDivElement>('loader')
const targetIsVisible = useElementVisibility(loader)

const route = useRoute()
const router = useRouter()

const { fetchAllByCategory, fetchAll, items: news, loadingBar } = useArticle()
const { newsCategories, loadCategory } = useCategory()

const loadData = async () => {
	if (route.params.category && route.params.category !== 'all') {
		await loadCategory()
		const [findCategory] = newsCategories.value.filter((category) => category.slug === route.params.category)
		if (findCategory) {
			await fetchAllByCategory(findCategory.id)
		}
	} else if (route.params.category === 'all') {
		await fetchAll()
	} else {
		await router.push(`/`)
	}
}

watch(targetIsVisible, (isVisible) => {
	if (isVisible) {
		if (route.params.category) {
			loadData()
		} else {
			router.push(`/`)
		}
	}
})

const loaderVisible = computed(() => {
	return loadingBar.progress.value > 0
})
</script>

<template>
	<div v-if="news.length > 0" class="w-full grid grid-cols-1 xl:grid-cols-2">
		<template v-for="item in news as Article[]" :key="item.uuid">
			<NewsItem :item="item" />
		</template>
	</div>
	<template v-else>
		<div class="container mx-auto my-14 flex justify-start items-center text-white">
			<p>Нет новостей в этой категории</p>
		</div>
	</template>
	<div v-if="loaderVisible" class="flex justify-center items-center p-4" ref="loader">
		<spinner />
	</div>
</template>

<style scoped></style>

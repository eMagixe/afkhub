<script setup lang="ts">
import { useArticle } from '~/composibles/useArticle'
import Spinner from '#shared/ui/spinner.vue'
import type { Article } from '#shared/types'
import { useTemplateRef } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const loader = useTemplateRef<HTMLDivElement>('loader')
const targetIsVisible = useElementVisibility(loader)

const { fetchItems, items: news, loadingBar } = useArticle()

watch(targetIsVisible, (isVisible) => {
	if (isVisible) {
		fetchItems()
	}
})

const loaderVisible = computed(() => {
	return !loadingBar.isLoading.value
})
</script>

<template>
	<div class="w-full grid grid-cols-1 xl:grid-cols-2">
		<template v-for="item in news as Article[]" :key="item.uuid">
			<NewsItem :item="item" />
		</template>
	</div>

	<div v-if="loaderVisible" class="flex justify-center items-center p-4" ref="loader">
		<spinner />
	</div>
</template>

<style scoped></style>

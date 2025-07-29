<script setup lang="ts">
import { useArticle } from '~/composibles/useArticle'
import Spinner from '~/components/chared/spinner.vue'

const route = useRoute()
const router = useRouter()

const slug = route.params.slug || ''

const { current, fetchOne, loadingBar } = useArticle()

if (slug) {
	await fetchOne(slug as string)
} else {
	router.push('/')
}

const loaderVisible = computed(() => {
	return loadingBar.progress.value > 0
})
</script>

<template>
	<div v-if="loaderVisible" class="flex justify-center items-center p-4" ref="loader">
		<spinner />
	</div>
	<PostsItem v-else-if="current" v-model="current" />
</template>

<style scoped></style>

<script setup lang="ts">
import { onMounted, useFetch } from '#imports'
import { NDivider, NImage, NList, NListItem, NSpace, NSpin, NTag, useLoadingBar } from 'naive-ui'

const loadingBar = useLoadingBar()
const loading = ref(null)

const items = ref(5)

const fetchItems = async () => {
	loadingBar.start()

	useFetch('/api/articles').then(({ data }) => {
		loadingBar.finish()
		items.value += 5
	})
}

onMounted(() => {
	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				fetchItems()
			}
		},
		{ threshold: 1.0 }
	)

	if (loading.value) {
		observer.observe(loading.value)
	}
})
</script>

<template>
	<n-list hoverable clickable>
		<n-list-item v-for="n in items" :key="n">
			<div class="flex justify-start items-center gap-8">
				<n-image width="320" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
				<div>
					<h2 class="text-primary">Title article</h2>
					<n-space size="small" class="mb-4">
						<n-tag :bordered="false" size="small"> Tag C</n-tag>
						<n-tag :bordered="false" size="small"> Tag D</n-tag>
					</n-space>
					<n-divider />
					<p class="mb-4">
						Lorem ipsum dolor sit amet,<br />
						consectetur adipiscing elit,<br />
						sed do eiusmod tempor incididunt<br />
						ut labore et dolore magna aliqua.<br />
						Ut enim ad minim veniam,<br />
						quis nostrud exercitation ullamco
					</p>
				</div>
			</div>
		</n-list-item>
		<div class="flex justify-center items-center p-4" ref="loading">
			<n-spin size="medium" />
		</div>
	</n-list>
</template>

<style scoped></style>

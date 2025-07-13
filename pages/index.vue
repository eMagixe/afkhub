<script setup lang="ts">
import { onMounted, useLoadingIndicator } from '#imports'

const loading = ref(null)

const loadingBar = useLoadingIndicator()

const items = ref(5)

const fetchItems = async () => {
	loadingBar.start()

	await $fetch('/api/articles').then(({ data }) => {
		setTimeout(() => {
			loadingBar.finish()
		}, 500)
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
	<div>
		<div v-for="n in items" :key="n">
			<div class="flex justify-start items-center border-b-1 border-b-[#3b3b40]">
				<img width="320" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" alt="cover" />
				<div class="w-full h-full pl-8">
					<h2 class="text-primary">Title article</h2>
					<div size="small" class="mb-4 text-white">
						<span size="small"> Tag C</span>
						<span size="small"> Tag D</span>
					</div>
					<p class="mb-4 text-white">
						Lorem ipsum dolor sit amet,<br />
						consectetur adipiscing elit,<br />
						sed do eiusmod tempor incididunt<br />
						ut labore et dolore magna aliqua.<br />
						Ut enim ad minim veniam,<br />
						quis nostrud exercitation ullamco
					</p>
				</div>
			</div>
		</div>
		<div class="flex justify-center items-center p-4" ref="loading">
			<img width="50" src="/spinner.svg" alt="loading" />
		</div>
	</div>
</template>

<style scoped>
.test {
	color: #3b3b40;
}
</style>

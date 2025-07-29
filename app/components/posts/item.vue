<script setup lang="ts">
const model = defineModel<Article>()
</script>

<template>
	<div class="container mx-auto my-14">
		<div class="w-full h-[400px]">
			<picture>
				<img class="post-cover" loading="lazy" :src="`${model?.media.source_url}`" alt="cover" />
			</picture>
		</div>
		<div class="w-full h-[400px] flex flex-col justify-between items-center">
			<h2
				class="text-primary inline-flex justify-start items-center py-8 w-full"
				v-html="model?.title.rendered"
			></h2>
			<div
				class="text-white post-content pb-8"
				v-if="model?.content.rendered"
				v-html="model.content.rendered"
			></div>
		</div>
	</div>
</template>

<style scoped>
.post-cover {
	object-fit: cover;
	object-position: center;
	width: 100%;
	height: 100%;
}

.post-content {
	text-align: justify;
}
</style>

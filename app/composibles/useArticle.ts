import { useLoadingIndicator } from '#imports'

export const useArticle = () => {
	const items = ref<Article[]>([])
	const loadingBar = useLoadingIndicator()
	const limit = 4
	let offset = 0
	let allLoading = false

	const fetchItems = async () => {
		loadingBar.start()

		if (allLoading) {
			loadingBar.finish()
			return
		}

		await $fetch('/api/articles?limit=' + limit + '&offset=' + offset).then((articles) => {
			if (offset === 0) {
				items.value = articles as Article[]
			} else {
				if (Array.isArray(articles) && articles.length === 0) allLoading = true
				for (let article of articles as Article[]) {
					items.value.push(article)
				}
			}

			loadingBar.finish()
			offset += limit
		})
	}

	return {
		items,
		fetchItems,
		loadingBar
	}
}

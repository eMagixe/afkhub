import { useLoadingIndicator, useRouter } from '#imports'

export const useArticle = () => {
	const items = ref<Article[]>([])
	const current = ref<Article | null>(null)
	const loadingBar = useLoadingIndicator()
	const limit = 4
	let offset = 0
	let allLoading = false
	const router = useRouter()

	const fetchAll = async () => {
		loadingBar.start()

		if (allLoading) {
			loadingBar.finish()
			return
		}

		await $fetch('/api/articles/all?limit=' + limit + '&offset=' + offset).then((articles) => {
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

	const fetchAllByCategory = async (category_id: number) => {
		loadingBar.start()

		if (allLoading) {
			loadingBar.finish()
			return
		}

		await $fetch('/api/articles/all?limit=' + limit + '&offset=' + offset + '&category=' + category_id).then(
			(articles) => {
				if (offset === 0 && Array.isArray(articles) && articles.length > 0) {
					items.value = articles as Article[]
				} else {
					items.value = []
				}
				loadingBar.finish()
			}
		)
	}

	const fetchOne = async (slug: string) => {
		loadingBar.start()

		if (allLoading) {
			loadingBar.finish()
			return
		}

		await $fetch(`/api/articles/${slug}`)
			.then((article) => {
				if (article) {
					current.value = article as Article
					loadingBar.finish()
				} else {
					loadingBar.finish()
					router.push('/404')
				}
			})
			.catch((error) => {
				console.error(error)
				loadingBar.finish()
			})
	}

	return {
		items,
		current,
		loadingBar,
		fetchAll,
		fetchAllByCategory,
		fetchOne
	}
}

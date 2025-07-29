export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig()
	const slug = event.context.params.slug

	return await fetch(config.public.API + `/posts?slug=${slug}&_fields=title,content,featured_media,slug`)
		.then((response) => {
			if (response.ok && response.status === 200) {
				return response.json().then(async (articles) => {
					const [article] = articles
					if (article && article.featured_media) {
						article.media = await fetch(
							config.public.API + '/media/' + article.featured_media + '?_fields=source_url'
						).then((response) => response.json().then((data) => data))

						return article
					} else if (article && !article.featured_media) {
						return article
					} else {
						return null
					}
				})
			} else {
				return null
			}
		})
		.catch((error) => {
			console.log(error)
			return null
		})
})

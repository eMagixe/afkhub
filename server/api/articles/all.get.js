export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig()
	const query = getQuery(event)

	let path = '/posts?_fields=title,content,featured_media,slug'

	if (query.category) {
		path += '&categories[]=' + query.category
	}

	const response = await fetch(config.public.API + path)

	if (response.ok) {
		return response.json().then(async (posts) => {
			if (Array.isArray(posts)) {
				for (const post of posts) {
					if (post.featured_media) {
						post.media = await fetch(
							config.public.API + '/media/' + post.featured_media + '?_fields=source_url'
						).then((response) => response.json().then((data) => data))
					}
				}
			}

			return posts
		})
	} else {
		const error = await response.json()
		throw createError({
			statusCode: response.status,
			statusMessage: error.message || 'Failed to fetch posts'
		})
	}
})

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig()
	const query = getQuery(event)
	const response = await fetch(
		config.public.API + '/posts?_fields[]=title&_fields[]=content&_fields[]=featured_media',
		{
			method: 'get'
		}
	)

	if (response.ok) {
		return response.json().then(async (posts) => {
			if (Array.isArray(posts)) {
				for (const post of posts) {
					if (post.featured_media) {
						post.media = await fetch(
							config.public.API + '/media/' + post.featured_media + '?_fields[]=source_url'
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

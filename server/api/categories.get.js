export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig()
	const query = getQuery(event)
	const response = await fetch(config.public.API + '/categories', { method: 'get' })

	if (response.ok) {
		return response.json().then((categories) => categories)
	} else {
		const error = await response.json()
		throw createError({
			statusCode: response.status,
			statusMessage: error.message || 'Failed to fetch posts'
		})
	}
})

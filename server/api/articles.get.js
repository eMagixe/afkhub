export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig()

    const response = await fetch(config.public.API + '/items/articles', { method: 'get'})

    if (response.ok) {
        return response.json().then(res => res.data)
    } else {
        const error = await response.json()
        throw createError({
            statusCode: response.status,
            statusMessage: error.message || 'Failed to fetch posts'
        })
    }
})
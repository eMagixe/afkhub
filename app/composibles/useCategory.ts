import type { Category } from '#shared/types'

export const useCategory = () => {
	const menuOptions = [
		{
			label: 'Новости',
			icon: 'uil:newspaper'
		}
	]

	const newsCategories = ref<MenuOption[]>([])

	const allCategories = ref<Category[]>([])

	const loadCategory = async () => {
		const { data } = await useFetch('/api/categories')

		if (data) {
			data.value.forEach((category: Category) => {
				allCategories.value.push(category)
				const [news] = menuOptions
				if (news) {
					newsCategories.value.push({
						label: category.name,
						to: `/category/${category.slug}`,
						icon: 'uil:circle'
					})
				}
			})
		}
	}

	const getCategoryByUUID = (UUID: string) => {
		if (UUID) {
			for (const category of allCategories.value) {
				console.log('Category UUID:', category.uuid, 'Searching for:', UUID)
				if (category.uuid === UUID) {
					return category.name
				}
			}
		} else {
			return 'Без категории'
		}
	}

	return {
		menuOptions,
		allCategories,
		newsCategories,
		getCategoryByUUID,
		loadCategory
	}
}

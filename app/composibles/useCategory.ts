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
		const data = await $fetch('/api/categories')

		if (data) {
			data.forEach((category: Category) => {
				allCategories.value.push(category)
				const [news] = menuOptions
				if (news) {
					if (category.name !== 'Все') {
						newsCategories.value.push({
							label: category.name,
							id: category.id,
							slug: category.slug,
							to: `/categories/${category.slug}`,
							icon: 'uil:circle'
						})
					} else {
						newsCategories.value.unshift({
							label: category.name,
							id: category.id,
							slug: category.slug,
							to: `/categories/${category.slug}`,
							icon: 'uil:circle'
						})
					}
				}
			})
		}
	}

	const getCategoryByUUID = (id: number) => {
		if (id) {
			for (const category of allCategories.value) {
				if (category.id === id) {
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

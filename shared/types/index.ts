export type MenuOption = {
	label: string
	action?: () => {}
	to?: string
	icon?: string | any
	children?: MenuOption[]
}

export type Article = {
	title: {
		rendered: string
	}
	content: {
		rendered: string
	}
	media: {
		source_url: string
	}
	categories: Category[]
}

export type Category = {
	uuid: string
	categories_uuid?: string | null
	name: string
	description: string
	slug: string
}

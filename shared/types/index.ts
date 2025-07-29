export type MenuOption = {
	label: string
	id: number
	slug: string
	action?: () => {}
	to?: string
	icon?: string | any
	children?: MenuOption[]
}

export type Article = {
	slug: string
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
	id: number
	name: string
	description: string
	slug: string
}

export type MenuOption = {
	label: string
	action?: () => {}
	to?: string
	icon?: string | any
	children?: MenuOption[]
}

export type Article = {
	uuid: string
	status: string
	sort: string | null
	user_create: string
	date_created: string
	user_updated: string | null
	date_updated: string | null
	name: string
	slug: string
	cover: string | null
	short_content: string
	content: string
	categories: Category[]
}

export type Category = {
	uuid: string
	categories_uuid?: string | null
	name: string
	description: string
	slug: string
}

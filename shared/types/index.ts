export type MenuOption = {
	label: string
	action?: () => {}
	to?: string
	icon?: string | any
	children?: MenuOption[]
}

export const toast = (title, icon = 'none', duration = 1500) => {
	uni.showToast({
		icon: icon,
		title: title,
		duration: duration
	})
}

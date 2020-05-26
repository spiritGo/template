/**
 * 提示框
 * title { String } 提示信息
 * icon { String } 图标
 * duration { Number } 显示时长
 */
const toast = (title, icon = 'none', duration = 1500) => {
	uni.showToast({
		icon: icon,
		title: title,
		duration: duration
	})
}


export default {
	toast
}

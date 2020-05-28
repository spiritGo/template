<template>
	<view></view>
</template>

<script>
export default {
	data() {
		return {};
	},
	mounted() {},
	onPullDownRefresh() {
		setTimeout(() => {
			uni.stopPullDownRefresh();
		}, 1000);
	},
	onNavigationBarButtonTap(e) {
		uni.showToast({
			icon: 'none',
			title: e.type
		});
	}
};
</script>

<style lang="scss"></style>

<template>
	<view class="p-30"><button size="mini" type="primary" @click="goPageNavigation">导航</button></view>
</template>

<script>
export default {
	data() {
		return {
			title: '无数据'
		};
	},
	onLoad() {},
	methods: {
		goPageNavigation() {
			uni.navigateTo({
				url: '../page-navigation/page-navigation'
			});
		}
	}
};
</script>

<style></style>

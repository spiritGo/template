<template>
	<view class="content">
		<text class="no-data">{{ title }}</text>
	</view>
</template>

<script>
import { test } from '../../common/js/api.js';
export default {
	data() {
		return {
			title: '无数据'
		};
	},
	onLoad() {
		// test().then(res => {
		// 	console.log('success: ', res);
		// });
	},
	methods: {}
};
</script>

<style></style>

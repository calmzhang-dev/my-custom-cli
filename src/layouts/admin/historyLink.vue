<script setup lang="ts">import { ref } from 'vue';

const links = ref<{ title: string }[]>([
	{ title: '编辑器' },
	{ title: '订单列表' },
	{ title: '用户管理' },
	{ title: '销售总额' },
	{ title: '编辑器' },
	{ title: '订单列表' },
	{ title: '用户管理' },
	{ title: '销售总额' },
	{ title: '编辑器' },
])
</script>

<template>
	<div class="hidden md:block">
		<div class="m-5 flex flex-wrap justify-start">
			<a v-for="link of links" class="bg-white rounded-md py-2 px-3 text-sm text-gray-600 ml-2 mb-2">
				{{ link.title }}
				<i class="fas fa-times ml-1"></i>
			</a>
		</div>
	</div>
</template>

<style lang="scss">
</style>

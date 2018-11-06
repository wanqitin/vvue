<template>
	<div>
		<div>Second</div>
	</div>
</template>

<script>
	export default {
		name: 'second',

		created() {
			//截取查询参数
			var queryParams = this.$route.query;
			console.log('queryParams ==> ', queryParams);
		},

		//更新组件内部守卫, 触发条件: 同一组件, 不同路由参数
		beforeRouteUpdate(to, from, next) {
			console.log('beforeRouteUpdate to ==> ', to);
			console.log('beforeRouteUpdate from ==> ', from);

			next();
		}
	}
</script>
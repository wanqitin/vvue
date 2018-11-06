<template>
	<div>
		<div>First</div>
	</div>
</template>

<script>
	export default {
		name: 'first',

		created() {
			//截取路由参数
			var params = this.$route.params;
			console.log('params ==> ', params);
		}
	}
</script>
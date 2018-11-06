<template>
	<div>home</div>
</template>

<script>
	export default {
		name: 'home',

		data() {
			return {
				msg: 'home组件'
			};
		},

		//组件内部守卫
		//进入组件之前
		beforeRouteEnter(to, from, next) {
			console.log('beforeRouteEnter to ==> ', to);
			console.log('beforeRouteEnter from ==> ', from);

			// 不能访问this ==> vue实例
			// console.log(this.msg);

			next();
		},

		//离开组件
		beforeRouteLeave(to, from, next) {
			console.log('beforeRouteLeave to ==> ', to);
			console.log('beforeRouteLeave from ==> ', from);

			// 不能访问this ==> vue实例
			console.log(this.msg);

			next();
		}
	}
</script>
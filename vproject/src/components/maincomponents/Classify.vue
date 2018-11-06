<template>
	<div>
		<div>
			<!-- 三级路由 -->
			<router-view/>
		</div>
		<div>classify</div>
		<ul>
			<li>
				<router-link :to="{name: 'yinger'}">婴儿</router-link>
			</li>
			<li>
				<router-link :to="{name: 'haixian'}">海鲜</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'classify'
	}
</script>
<template>
  <div id="app">
    <div>
    	<!-- 一级路由 -->
    	<router-view/>
    </div>

    <div>
    	<button @click="go({name: 'first', params: {id: 'kevin', n: 12}})">first组件</button>
    	<button @click="go({name: 'second', query: {name: 'jack', age: 20}, params: {age: 10}})">second组件1</button>
        <button @click="go({name: 'second', query: {name: 'jack', age: 20}, params: {age: 20}})">second组件2</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',

  methods: {
  	go(params) {
  		this.$router.push(params);
  	}
  }
}
</script>

<style>
  body{
    margin: 0 auto;
    background-color: #fff;
  }
</style>

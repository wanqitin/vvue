// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//注册一个全局前置路由守卫
router.beforeEach((to, from, next) => {

	console.log('beforeEach to ==> ', to);
	console.log('beforeEach from ==> ', from);

	// next(false); //拦截进入下一个路由
	next(true); //进入下一个路由

})

//注册一个全局后置路由守卫
router.afterEach((to, from) => {
	console.log('afterEach to ==> ', to);
	console.log('afterEach from ==> ', from);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

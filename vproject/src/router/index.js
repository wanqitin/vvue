import Vue from 'vue'
import Router from 'vue-router'


// import Main from '@/components/Main'

// import Home from '@/components/maincomponents/Home'
// import Classify from '@/components/maincomponents/Classify'
// import Shopcart from '@/components/maincomponents/Shopcart'
// import Mine from '@/components/maincomponents/Mine'

// import Yinger from '@/components/classifycomponents/Yinger'
// import Haixian from '@/components/classifycomponents/Haixian'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      // component: Main,

      //组件懒加载
      component: r => require(['@/components/Main'], r),

      // component: function (resolve) {
      //   return require(['@/components/Main'], r);
      // }

      children: [
        {
          path: '/home',
          name: 'home',
          // component: Home
          component: r => require(['@/components/maincomponents/Home'], r),

          //路由内部独享守卫
          //进入路由之前执行
          beforeEnter: (to, from, next) => {
            console.log('beforeEnter to ==> ', to);
            console.log('beforeEnter from ==> ', from);
            
            //通过
            next();
          }

        },
        {
          path: '/classify',
          name: 'classify',
          // component: Classify,
          component: r => require(['@/components/maincomponents/Classify'], r),
          children: [
            {
              path: '/yinger',
              name: 'yinger',
              // component: Yinger
              component: r => require(['@/components/classifycomponents/Yinger'], r)
            },
            {
              path: '/haixian',
              name: 'haixian',
              // component: Haixian
              component: r => require(['@/components/classifycomponents/Haixian'], r)
            },
            {
              path: '*',
              redirect: () => {
                return {name: 'yinger'};
              }
            }
          ]
        },
        {
          path: '/shopcart',
          name: 'shopcart',
          // component: Shopcart
          component: r => require(['@/components/maincomponents/Shopcart'], r)
        },
        {
          path: '/mine',
          name: 'mine',
          // component: Mine
          component: r => require(['@/components/maincomponents/Mine'], r)
        },
        {
          path: '*',
          redirect: () => {
            return {name: 'home'}
          }
        }
      ]
    },

    {
      //带参数的路由n,id
      path: '/first/:n/:id',
      name: 'first',
      component: resolve => require(['@/components/First'], resolve)
    },

    {
      path: '/second/:age',
      name: 'second',
      component: resolve => require(['@/components/Second'], resolve)
    },

    {
    	//重定向
    	path: '*',
    	// redirect: '/'
    	// redirect: {path: '/'}
    	// redirect: {name: 'main'}
    	redirect: () => {
    		// return '/';
    		// return {path: '/'};
    		return {name: 'main'};
    	}
    }
  ]
})

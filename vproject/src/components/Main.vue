<template>
  <div class="hello">

    <div>
      <!-- 二级路由 -->
      <router-view/>
    </div>
    
    <div class="tabs">
      <span :class="{active: item.isActive}" v-for="(item, index) in tabs" @click="goPath(item.path, item, $event)" :key="index">{{item.tab}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data() {
    return {
      tabs: [
        {tab: '首页', isActive: true, path: {name: 'home'}, flag: ['home']},
        {tab: '分类', isActive: false, path: {name: 'yinger'}, flag: ['yinger', 'haixian']},
        {tab: '购物车', isActive: false, path: {name: 'shopcart'},  flag: ['shopcart']},
        {tab: '个人中心', isActive: false, path: {name: 'mine'}, flag: ['mine']}
      ]
    };
  },

  methods: {
    goPath(params, item, e) {

      //e.target: 原生DOM元素
      // console.log(e.target);

      //如果当前是激活状态, 拦截执行
      if (item.isActive) {
        return;
      }

      for (var i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i].isActive) {
          this.tabs[i].isActive = false;
          break;
        }
      }

      item.isActive = true;

      this.$router.push(params);

    }
  },

  created: function () {
    //纠正tabs激活状态
    var path = location.hash.split('/')[1];

    for (var i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].flag.indexOf(path) > -1) {
        this.tabs[i].isActive = true;
      } else {
        this.tabs[i].isActive = false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tabs{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #ddd;
  }
  .tabs>span{
    float: left;
    width: 25%;
    height: 44px;
    text-align: center;
    line-height: 44px;
    cursor: pointer;
  }

  .tabs>span.active{
    background-color: #e49;
    color: #fff;
  }
</style>

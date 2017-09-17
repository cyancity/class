<template>
  <div style="height: 100%">
    <router-view></router-view>
    <tabbar class="tabbar">
      <tabbar-item link="/">
        <img slot="icon" src="./assets/icon_nav_button.png">
        <span slot="label">主页</span>
      </tabbar-item>

      <tabbar-item link="/login">
        <img slot="icon" src="./assets/icon_nav_article.png">
        <span slot="label">我的订单</span>
      </tabbar-item>

      <tabbar-item link="/user">
        <img slot="icon" src="./assets/icon_nav_msg.png">
        <span slot="label">用户</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem
  },
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
.tabbar {
  position: relative ;
}
</style>

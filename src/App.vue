<template>
  <div style="height: 100%">
    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>
    <view-box>
      <router-view style="padding-bottom: 55px"></router-view>
      <tabbar style="position: fixed">
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
    </view-box>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, ViewBox, Drawer, Group, Cell, Actionsheet, TransferDom, Loading } from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    Tabbar,
    TabbarItem,
    ViewBox,
    Drawer,
    Group,
    Cell,
    Actionsheet,
    Loading
  },
  name: 'app',
  data () {
    return {
      isLoading: false,
      showMenu: false,
      drawerVisibility: false,
      showModeValue: false,
      showPlacementValue: '',
      menus: ''
    }
  },
  methods: {
    clickMore () {
      console.log('click')
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
.tabbar {
  position: fixed;
}
</style>

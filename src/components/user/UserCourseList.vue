<template>
  <div>
    <x-header :right-options="{showMore: true}" @clickMenus="showMenus = true">全部课程</x-header>
    <div style="width: 100%;overflow: scroll;-webkit-overflow-scrolling: touch">
      <tab bar-active-color="#456782" :line-width="1" v-model="tabDisplayIndex">
        <tab-item :selected="tabSelectedIndex === index" v-for="(item, index) in tabs" :key="index" @click="tabSelectedIndex = index">
          {{ item }}
        </tab-item>
      </tab>
      <swiper v-model="tabDisplayIndex">
        <swiper-item v-for="(item, index) in swiperList" :key="index">
          {{ item }}
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script>
import { XHeader, XInput, TransferDom, Tab, TabItem, Swiper, SwiperItem } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    XInput,
    Tab,
    TabItem,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      tabs: ['全部', '待确认', '待使用', '待支付', '待评价'],
      tabSelectedIndex: 1,
      tabDisplayIndex: 0,
      swiperList: ['全部', '待确认', '待使用', '待支付', '待评价']
    }
  }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/center.less';
@import '~vux/src/styles/1px.less';
</style>

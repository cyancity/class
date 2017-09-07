/*
 * @Author: Li 
 * @Date: 2017-09-03 02:37:39 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-09-07 21:38:00
 * @Description: Page for user to edit user Info
 */
<template>
  <div>
    <x-header title="个人资料"></x-header>
    <group>
      <cell link="update-avatar">
        <img :src="avatar" slot="icon" width="20" class="cell-avatar">
      </cell>
      <cell v-for="(item, index) in info" :key="index" :title="item.title" :value="item.value"></cell>
    </group>
  </div>
</template>

<script>
import { XHeader, Group, Cell } from 'vux'
export default {
  components: {
    XHeader,
    Group,
    Cell
  },
  data () {
    return {
      avatar: 'https://cn.vuejs.org/images/logo.png',
      info: [
        {'title': '昵称', 'value': 'cyancity'},
        {'title': '性别', 'value': '男'},
        {'title': 'Wechat', 'value': 'hhgsws'},
        {'title': '地址', 'value': '江苏大学'},
        {'title': '手机号', 'value': '12345678901'}
      ]
    }
  }
}
</script>

<style>
.cell-avatar {
  display: block;
  margin-right: 5px;
}
</style>

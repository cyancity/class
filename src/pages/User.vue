/*
 * @Author: Li 
 * @Date: 2017-09-03 03:34:32 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-09-07 18:16:54
 */
<template>
  <div>
    <group>
      <avatar :avatarUrl="avatar" :userName="username"></avatar>
      
    </group>
  </div>
</template>

<script>
import Avatar from '../components/common/Avatar'
import { Group, Cell, Grid, GridItem } from 'vux'
export default {
  components: {
    Avatar,
    Cell,
    Group
  },
  data () {
    return {
      avatar: 'https://cn.vuejs.org/images/logo.png',
      username: 'li'
    }
  }
}
</script>

<style>

</style>

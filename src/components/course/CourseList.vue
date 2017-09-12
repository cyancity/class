/*
 * @Author: Li 
 * @Date: 2017-09-03 02:48:35 
 * @Last Modified by: Li-1700x
 * @Last Modified time: 2017-09-12 21:27:05
 * @Description: Page for user to find course 
 */
<template>
  <div>
    <x-header title="找课程"></x-header>
    <div class="list-item" v-for="(item, index) in lists" :key="index">
      <x-img :src="info.course_pic" @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
      <h4>{{ item.title }}</h4>
      <span>{{ item.num }}</span>
      <span>{{ item.course_member }}</span>
      <span>{{ item.course_quota }}</span>
      <p>{{ item.course_price }}</p>
    </div>
  </div>
</template>

<script>
import { XHeader, XImg } from 'vux'
export default {
  components: {
    XHeader,
    XImg
  },
  data () {
    return {
      lists: [
        {
          'img': '',
          'title': '',
          'num': '',
          'course_member': '',
          'course_quota': '',
          'course_price': ''
        }
      ]
    }
  },
  methods: {
    getCouseList () {

    }
  },
  mounted () {
    this.getCouseList()
  }
}
</script>

<style>

</style>

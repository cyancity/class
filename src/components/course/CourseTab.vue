<template>
  <div>
    <group-title>Demo</group-title>
    <grid :row="3">
      <grid-item v-for="(item, index) in items" :key="index" :label="item.detail">
        <img :src="item.url" slot="icon">
      </grid-item>
    </grid>
  </div>
</template>

<script>
import { Grid, GridItem, GroupTitle } from 'vux'

export default {
  components: {
    Grid,
    GridItem,
    GroupTitle
  },
  data () {
    return {
      items: [
        {'url': '../assets/grid_icon.png', 'detail': 'demo'},
        {'url': '../assets/grid_icon.png', 'detail': 'demo'},
        {'url': '../assets/grid_icon.png', 'detail': 'demo'}
      ]
    }
  },
  methods: {
    onItemClick () {
      console.log('on item click')
    }
  }
}
</script>

<style scoped>
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
</style>

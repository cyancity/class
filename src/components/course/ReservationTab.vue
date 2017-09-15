<template>
  <div>
    <blockquote class="home-quote">
      <p class="home-title">教师/机构找教室</p>
    </blockquote>
    <div class="home-room">
      <div class="flex-row">
        <img src="">
      </div>
      <div class="flex-row">
        <div class="flex-col">
          两行
        </div>
      </div>
      <div class="flex-row">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/common'
.home-room
  display: flex
  .row-1
    flex: 1
  .row-2
    flex: 2
</style>

<template>
  <div>
    <blockquote class="home-quote">
      <p class="home-title">找课程</p>
    </blockquote>

    <div class="home-course">
      <div>
        <router-link to="/course/list">
          <img src="https://n1image.hjfile.cn/shetuan/2017-08-29-1503990685-760-1408.png" alt="">
          <p>中小学课程</p>
        </router-link>
      </div>
      <div>
        <img src="https://n1image.hjfile.cn/shetuan/2017-08-29-1503990685-489-9422.png" alt="">
        <p>中小学课程</p>
      </div>
      <div>
        <img src="https://n1image.hjfile.cn/shetuan/2017-08-29-1503990686-381-5062.png" alt="">
        <p>中小学课程</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    onItemClick () {
      console.log('on item click')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/common'
</style>

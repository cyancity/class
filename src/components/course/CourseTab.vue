<template>
  <div>
    <blockquote class="home-quote">
      <p class="home-title">Demo</p>
    </blockquote>
    
    <div class="home-course">
      <img src="https://pro.buysellads.com/p/manage/asset/id/58085" alt="">
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

<style scoped>
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}

.home-course img {
  border-radius: 50%;
  height: 60px;
  width: 60px;
}

.home-quote {
  margin: 1em 0 0 0;
    padding-left: 8px;
}

.home-title {
  border-left: 4px solid #43b983;
  padding-left: 10px;
}
</style>

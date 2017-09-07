<template>
  <div>
    <div class="avatar-left">
      <cell is-link>
        <img :src="avatarUrl" slot="icon">
        <p slot="title">{{userName}}</p>
      </cell>
    </div>
  </div>
</template>

<script>
import { Cell } from 'vux'
export default {
  components: {
    Cell
  },
  props: [
    'avatarUrl',
    'userName'
  ]
}
</script>

<style scoped>
.avatar-left {
  text-align: left;
  padding: 10px 20px;
  color: #101010;
  font-size: 18px;
}

.avatar-left p {
  padding-left: 60px;
}

.avatar-left img {
  border-radius: 50%;
  width: 70px;
  height: 70px;
  border: 2px solid #ececec;
}
</style>

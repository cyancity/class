/*
 * @Author: Li 
 * @Date: 2017-09-03 03:34:32 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-09-07 21:21:26
 */
<template>
  <div>
    <group>
      <avatar :avatarUrl="avatar" :userName="username" :to="{path: 'user/info'}"></avatar>
      <card>
        <div slot="content" class="tag-flex tag-content">
          <div class="vux-1px-1" :class="{ 'vux-1px-r': index !== 2 }" v-for="(item, index) in tabs" :key="index">
            <span>
              {{ item.content }}
            </span>
          </div>
        </div>
      </card>
    </group>

    <group>
      <cell v-for="(item, index) in services" :key="index" :title="item.title" :link="item.to" class="service-list">
        <i :class="item.icon"></i>
      </cell>
    </group>
  </div>
</template>

<script>
import Avatar from '../components/common/Avatar'
import { Group, Cell, Card } from 'vux'
export default {
  components: {
    Avatar,
    Cell,
    Group,
    Card
  },
  data () {
    return {
      avatar: 'https://cn.vuejs.org/images/logo.png',
      username: 'li',
      tabs: [
        {'content': '我的标签', 'to': '/tag'},
        {'content': '我的课程', 'to': '/course/list'},
        {'content': '我的关注', 'to': '/follow'}
      ],
      services: [
        {'title': '我的钱包', 'to': '/', 'icon': 'icon'},
        {'title': '邀请有奖', 'to': '/', 'icon': 'icon'},
        {'title': '建议信箱', 'to': '/', 'icon': 'icon'},
        {'title': '联系客服', 'to': '/', 'icon': 'icon'}
      ]
    }
  }
}
</script>

<style scoped lang="less">
@import '~vux/src/styles/1px.less';

.tag-flex {
  display: flex;
}

.tag-content {
  padding: 10px 0
}

.tag-flex div {
  flex: 1;
  text-align: center;
  font-size: 14px;
}

.service-list {
  font-size: 14px;
  line-height: 20px;
}

.service-list i {
  width: 45px;
  height: 45px;
  padding-left: 7px;
}

</style>

<template>
  <div>
    <img width="100%" height="100%" src="https://resa6.hjfile.cn/uploads/c241df0f-ddd7-4b74-9b6e-59061f384407.jpg">
     <!-- main nav -->
    <div class="status-bar">
      <search
      placeholder="搜课程、老师、入驻机构"
      @result-click="jumpToResult"
      @on-change="getInputValue"
      :inputValue="inputValue"
      v-model="placeHolder"
      auto-scroll-to-top top="0px"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search">
      </search>
      <!-- 添加cell -->
      <!--<group>-->
        <!--<cell title="cell title" is-link link="/"></cell>-->
      <!--</group>-->
    </div>

    <course-tab></course-tab>

    <reservation-tab></reservation-tab>

    <course-feeds></course-feeds>

  </div>
</template>

<script>
import CourseTab from '../components/course/CourseTab'
import ReservationTab from '../components/course/ReservationTab'
import CourseFeeds from '../components/course/CourseFeeds'
import { Search, Group, Cell } from 'vux'

export default {
  components: {
    CourseTab,
    ReservationTab,
    CourseFeeds,
    Search,
    Group,
    Cell
  },
  data () {
    return {
      inputValue: [],
      placeHolder: 'PlaceHolder',
      banner: 'https://resa6.hjfile.cn/uploads/b6a63288-43c0-43a6-a6e3-19686bbb3702.jpg'
    }
  },
  methods: {
    jumpToResult () {
      console.log('when there is a result, when user click, then do this function')
    },
    getInputValue (val) {
      this.inputValue = val ? getResults(this.placeHolder) : []
    },
    onFocus () {
      console.log('on focus now')
    },
    onCancel () {
      console.log('canceled')
    },
    onSubmit () {
      console.log('submit now')
    }
  },
  mounted () {
  }
}

function getResults (val) {
  console.log('feeds results')
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `$(val) result: $(i + 1)`,
      other: i
    })
  }
  return rs
}
</script>

<style lang="stylus" scoped>
.banner
  width: 414px
  height: 129px
</style>

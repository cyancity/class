<template>
  <div>
     <!-- main nav -->
    <div class="status-bar">
      <img src="" alt="">
      <search
      @result-click="jumpToResult"
      @on-change="getInputValue"
      :inputValue="inputValue"
      v-model="placeHolder"
      position="absolute"
      auto-scroll-to-top top="46px"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"></search>
      <!-- 添加cell -->
      <!--<group>-->
        <!--<cell title="cell title" is-link link="/"></cell>-->
      <!--</group>-->
    </div>

    <course-tab></course-tab>

    <reservation-tab></reservation-tab>

    <course-discount></course-discount>

  </div>
</template>

<script>
import CourseTab from '../components/course/CourseTab'
import ReservationTab from '../components/course/ReservationTab'
import CourseDiscount from '../components/course/CourseDiscount'
import {Search, Group, Cell} from 'vux'

export default {
  components: {
    CourseTab,
    ReservationTab,
    CourseDiscount,
    Search,
    Group,
    Cell
  },
  data () {
    return {
      inputValue: [],
      placeHolder: 'PlaceHolder'
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

<style>

</style>

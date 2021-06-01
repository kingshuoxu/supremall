<template>
  <div id="detail">
    <!-- 导航 -->
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images='topImages'></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'

import {getDetail} from '../../network/detail'

export default {
  name: 'Detail',

  components: {
    DetailNavBar,
    DetailSwiper
  },
  data() {
    return {
      iid: null,
      topImages: [],
    }
  },
  created() {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res => {
      // 1.获取顶部轮播数据
      this.topImages = res.result.itemInfo.topImages
    })
  },
}
</script>

<style scoped>

</style>

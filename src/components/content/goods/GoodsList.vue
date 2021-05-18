<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goods-item = 'item'></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default: [],
    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style scoped>
    .goods {
    display: flex;
    /* 默认不包裹 nowrap 若为包裹则根据宽度自动一行显示x个 */
    flex-wrap: wrap;
    padding: 2px;
    /* 均等分 */
    justify-content: space-around;
  }

</style>

import {debounce} from './utils'
export const itemListerMixin = {
  data() {
    return {
      itemImgListener: null,
    }
  },

  mounted() {

    const refresh = debounce(this.$refs.scroll && this.$refs.scroll.refresh, 50);

    this.itemImgListener = () => {
      refresh();
      // console.log('nihao ')
    }
    this.$bus.$on('itemImageLoad', this.itemImgListener)

  },
}

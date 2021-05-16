<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive" class="item-icon"><slot name="item-icon"></slot></div>
    <div v-else class="item-active-icon"><slot name="item-active-icon"></slot></div>
    <div class="item-text" :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
    export default {
      name: 'TabBarItem',
      props: {
        path: String,
        activeColor: {
          type: String,
          default: 'red'
        }
      },
      data(){
        return{
          // isActive: true
        }
      },
      computed: {
        isActive() {
          return this.$route.path.includes(this.path);
        },
        activeStyle() {
          return this.isActive? {color: this.activeColor} : {}
        }
      },
      methods: {
        itemClick(){
          if(this.$route.path === this.path) return
          // console.log('itemClick')
          this.$router.replace(this.path)
        }
      },
    }
</script>

<style scoped>
    .tab-bar-item {
      flex: 1;
      text-align: center;
      height: 49px;
      /* 常用高度 */
      font-size: 14px;
    }

    .tab-bar-item img {
      height: 1.5rem;
      width: 1.5rem;
      margin-top: 0.1875rem;
      vertical-align: middle;
      margin-bottom: 0.125rem;
    }

    /* .active {
      color: activeColor;
    } */
</style>

<template>
  <div class="title">
    <div class="title-box">
      <span class="before" @click="back"></span>
      <h2>行程详情</h2>
      <span class="more" @click.stop="toggle"></span>
      <div class="menu" v-show="show">
        <a class="home" href="//m.woqu.com">首页</a>
        <a class="line" href="//m.woqu.com/custom/list">分类线路</a>
        <a class="order" href="//m.woqu.com/order-list-app">我的订单</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  data() {
    return {
      show: false
    }
  },
  props: ['title'],
  methods: {
    toggle() {
      this.show = !this.show;
    },
    back() {
      history.go(-1);
    },
    hide() {
      this.show = false;
    }
  },
  mounted() {
    document.addEventListener('click', this.hide);
    document.addEventListener('scroll', this.hide);
  },
  beforeDestory() {
    document.removeEventListener('click', this.hide);
    document.removeEventListener('scroll', this.hide);
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
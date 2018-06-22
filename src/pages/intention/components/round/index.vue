<template>
  <div>
    <div class="round-box" :style="style">
      <span :class="{a: true, cur: index === 0}"></span>
      <span :class="{b: true, cur: index === 1}"></span>
      <span :class="{c: true, cur: index === 2}"></span>
      <span :class="{d: true, cur: index === 3}"></span>
      <!-- <span :class="{e: true, cur: roundNum % 8 === 4 || roundNum % 8 === -4}"></span> -->
      <!-- <span :class="{f: true, cur: roundNum % 8 === 5 || roundNum % 8 === -3}"></span> -->
      <!-- <span :class="{g: true, cur: roundNum % 8 === 6 || roundNum % 8 === -2}"></span> -->
      <!-- <span :class="{h: true, cur: roundNum % 8 === 7 || roundNum % 8 === -1}"></span> -->
    </div>
    <div class="btn" @click="handleClick">
      <span>开始定制</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Round',
  props: ['index', 'changeState', 'swiperRef'],
  computed: {
    style() {
      return {
        transform: `rotate(${-45 * this.index}deg)`
      }
    },
  },
  methods: {
    handleClick() {
      if (this.swiperRef) {
        this.swiperRef.slideNext();
      }
    }
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
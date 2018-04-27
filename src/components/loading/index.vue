<template>
  <div class="loading" ref="loadingModal" v-show="loading">
    <div class="loading-box">
      <div class="loading-border"></div>
      <div class="loading-img"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: ['loading'],
  mounted() {
    this.$refs.loadingModal.addEventListener('touchmove', (e) => {
      e.preventDefault();
    });
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
<template>
  <div class="next">
    <span @click="next"></span>
  </div>
</template>

<script>
export default {
  name: 'Next',
  props: ['next'],
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
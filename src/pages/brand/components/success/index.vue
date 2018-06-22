<template>
  <div class="success-box" v-show="success" @click="close({key: 'success', value: false})">
    <div class="inbox">
      <img src="./images/success.png" alt="">
      <h3>提 交 成 功</h3>
      <p>我们会尽快与你联系</p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Success',
  props: ['success'],
  methods: {
    ...mapMutations('brand', {
      close: 'CHANGE_STATE'
    })
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
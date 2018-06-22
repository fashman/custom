<template>
  <div class="error-box" v-show="error">
    <div class="inbox">
      <img src="./images/error.png" alt="">
      <h3>{{ text || '请填写正确的手机号' }}</h3>
      <span @click="callback({key: 'errorModal', value: {show: false, text: ''}})">确定</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: ['error', 'text', 'callback'],
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
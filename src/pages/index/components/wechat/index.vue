<template>
  <div class="wechat-box" v-show="wechat.show">
    <div class="cover" @click="closeModal"></div>
    <div class="inbox" v-if="wechat && wechat.data">
      <img :src="wechat.data.wechat" alt="">
      <h3>微信号：{{wechat.data.wx}}</h3>
      <span @click="copy" class="J-copy" :data-clipboard-text="wechat ? wechat.data.wx : ''">复制微信号</span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Clipboard from 'clipboard';
import { Toast } from 'mint-ui';

export default {
  name: 'Wechat',
  data() {
    return {
      success: false
    }
  },
  props: ['wechat', 'callback'],
  methods: {
    copy() {
      let _clipboard = new Clipboard('.J-copy');
      _clipboard.on('success', () => {
        Toast({
          message: '复制成功',
          position: 'bottom',
          duration: 5000
        });
      });
    },
    closeModal() {
      this.callback({ key: 'wechatModal', value: { show: false, data: null } });
    }
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
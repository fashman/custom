<template>
  <div class="sidebar">
    <span @click="handleYsf" class="kefu"></span>
    <span @click="handleTel" class="tel"></span>
    <span v-show="showGoTop" @click="goTop" class="gotop"></span>
    <div ref="telBoxModal" class="tel-box" v-show="showTelBox">
      <div class="cover" @click.stop="handleTel"></div>
      <div class="info">
        <div class="tit">7*24h免费电话</div>
        <div class="list">
          <p>中国当地：<a href="tel:400-661-5757">400-661-5757</a></p>
          <p>美国当地：<a href="tel:1-408-786-0688">1-408-786-0688</a></p>
          <p>英国当地：<a href="tel:0-800-098-8488">0-800-098-8488</a></p>
          <p>国际通用：<a href="tel:86-755-3667-7780">86-755-3667-7780</a></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import utils from '@/utils/utils';

export default {
  name: 'SideBar',
  data() {
    return {
      showGoTop: false,
      showTelBox: false
    }
  },
  props: ['callback', 'groupId'],
  methods: {
    goTop() {
      if( this.callback ) {
        this.callback();
      } else {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    },
    handleScroll() {
      const scrollTop = utils.getScrollTop();
      this.showGoTop = scrollTop > 100 ? true : false;
    },
    handleYsf() {
      if ( ysf ) {
        // const { groupId = [] } = this;
        // const o = {'North_America': '1052440', 'Oceania': '1043928', 'Europe': '1052439'};
        // const gid = groupId.length ? groupId[0].replace(' ', '_') : '';
        // ysf.config({ groupid: o[gid] || 955150 });
        ysf.open({ templateId: 2484043 });
      }
    },
    handleTel() {
      this.showTelBox = !this.showTelBox;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.$refs.telBoxModal.addEventListener('touchmove', (e) => {
      e.preventDefault();
    });
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
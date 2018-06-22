<template>
  <div class="consulting-box" v-show="show" ref="consultingRef">
    <div class="wrap" :style="style">
      <div class="inbox">
        <img src="./images/pic.jpg" alt="">
        <h3>找不到满意的行程？对行程有疑问？<br>让定制师来帮你！</h3>
        <span @click="handleYsf">咨询定制师</span>
      </div>
      <div class="close" @click="close"></div>
    </div>
  </div>
</template>

<script>
import cookie from 'js-cookie';

export default {
  name: 'Consulting',
  data() {
    return {
      show: false,
      style: {},
      curDate: `${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`
    }
  },
  methods: {
    handleYsf() {
      if ( ysf ) {
        ysf.open({ templateId: 2484043 });
        this.close();
      }
    },
    setCookie() {
      cookie.set('consulting', this.curDate, {expires: 1, path: '/'});
    },
    close() {
      this.style = {
        width: '30px',
        height: '30px',
        transform: 'rotate(-360deg)',
        borderRadius: '50%'
        
      };
      setTimeout(() => {
        this.style = {
          width: '30px',
          height: '30px',
          transform: 'rotate(-360deg)',
          borderRadius: '50%',
          right: '30px',
          opacity: '.2',
          top: document.getElementsByClassName('sidebar')[0].offsetTop + 'px'
        };
      }, 500);
      setTimeout(() => {
        this.show = false;
        this.setCookie();
        document.getElementsByClassName('kefu')[0].className = 'kefu kreep';
      }, 1000);
    }
  },
  mounted() {
    const consultingCookie = cookie.get('consulting');
    if (consultingCookie !== this.curDate) {
      setTimeout(() => {
        this.show = true;
      }, 8000);
    }
    this.$refs.consultingRef.addEventListener('touchmove', (e) => {
      e.preventDefault();
    });
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
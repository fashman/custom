<template>
  <div class="user-box">
    <div class="user-icon" @click="show"></div>
    <div class="user" v-show="isShow" ref="userRef">
      <div :class="{ info: true, show: isShow, hide: hideClass}">
        <div class="yours" v-if="userInfo">
          <h3>Hi，{{ userInfo }}</h3>
          <p><a href="//m.woqu.com/order-list-app">我的订单</a></p>
          <p><span @click="reloadUrl('//m.woqu.com/member/logout')">退出</span></p>
        </div>
        <div class="yours" v-else>
          <h3>
            <span @click="reloadUrl('//m.woqu.com/account/password-login')">点击登录</span>
          </h3>
          <p>
            <a href="//m.woqu.com/account/dynamic-login?target=http%3A%2F%2Fm.woqu.com%2Forder-list-app">我的订单</a>
          </p>
          <p>
            <span @click="reloadUrl('//m.woqu.com/account/dynamic-login')">注册</span>
          </p>
        </div>
        <div class="line"></div>
        <div class="links">
          <p>
            <a href="/home/index">首页</a>
          </p>
          <p>
            <a href="/custom/intention">定制</a>
          </p>
          <p>
            <a href="/custom/list">线路</a>
          </p>
        </div>
        <div class="tel">
          <p>中国本地：400-661-5757</p>
          <p>国际通用：86-755-3667-7780</p>
        </div>
      </div>
      <div class="cover" @click="hide"></div>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios';

export default {
  name: 'User',
  data() {
    return {
      isShow: false,
      hideClass: false,
      userInfo: null
    }
  },
  created() {
    axios({ 
      url: '//m.woqu.com/member/check-is-login',
    }).then(data => {
      const res =data.data;
      if ( res.rs === 1){
        this.userInfo = res.data;
      }
    });
  },
  methods: {
    show() {
      this.isShow = true;
    },
    hide() {
      this.hideClass = true;
      setTimeout(() => {
        this.isShow = false;
        this.hideClass = false;
      }, 500);
    },
    reloadUrl(url) {
      location.href = `${url}?target=${location.href}`;
    }
  },
  mounted() {
    this.$refs.userRef.addEventListener('touchmove', (e) => {
      e.preventDefault();
    });
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
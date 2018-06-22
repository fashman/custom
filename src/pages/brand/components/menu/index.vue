<template>
  <div :class="[{fixeds: fixed},'menu']" ref="menu">
    <div :class="[{active: activeMenu === 'customer'}, 'menu-item']" @click="goCustomer">
      定制师
      <span><i></i></span>
    </div>
    <div :class="[{active: activeMenu === 'travel'}, 'menu-item']" @click="goTravel">
      真体验
      <span><i></i></span>
    </div>
    <div :class="[{active: activeMenu === 'performance'}, 'menu-item']" @click="goPerformance">
      个性化
      <span><i></i></span>
    </div>
    <div :class="[{active: activeMenu === 'about'}, 'menu-item']" @click="goContact">
      联系我们
      <span><i></i></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      fixed: false,
      menuOffTop: '',
      customerTop: '',
      performanceTop: '',
      travelTop: '',
      aboutTop: '',
      activeMenu: 'customer',
    }
  },
  methods: {
    handleScroll() {
      const menuScrollTop =  document.body.scrollTop || document.documentElement.scrollTop;
      if (this.menuOffTop <= menuScrollTop) {
        this.fixed = true;
        document.body.classList.add('body-padding');
      } else {
        this.fixed = false;
        document.body.classList.remove('body-padding');
      }

      if (menuScrollTop >= this.aboutTop - 120) {
        this.activeMenu = 'about';
      } else if (menuScrollTop >= this.performanceTop - 120) {
        this.activeMenu = 'performance';
      } else if (menuScrollTop >= this.travelTop - 120) {
        this.activeMenu = 'travel';
      } else {
        this.activeMenu = 'customer';
      }
    },

    goContact() {
      document.body.scrollTop = this.aboutTop-60;
      document.documentElement.scrollTop = this.aboutTop-60;
    },
    goPerformance() {
      document.body.scrollTop = this.performanceTop-60;
      document.documentElement.scrollTop = this.performanceTop-60;
    },
    goTravel() {
      document.body.scrollTop = this.travelTop-60;
      document.documentElement.scrollTop = this.travelTop-60;
    },
    goCustomer() {
      document.body.scrollTop = this.customerTop-20;
      document.documentElement.scrollTop = this.customerTop-20;
    }
  },
  mounted() {
    const _this = this;
    window.addEventListener('scroll', this.handleScroll);
    this.menuOffTop = this.$refs.menu.offsetTop;
    setTimeout(() => {
      _this.customerTop = document.querySelector('.custom').offsetTop;
      _this.performanceTop = document.querySelector('.performance').offsetTop;
      _this.travelTop = document.querySelector('.travel').offsetTop;
      _this.aboutTop = document.querySelector('.about').offsetTop;
    },1000);
   
  
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
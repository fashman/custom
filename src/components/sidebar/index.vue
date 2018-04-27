<template>
  <div class="sidebar">
    <span @click="handleYsf" class="kefu"></span>
    <span v-show="show" @click="goTop" class="gotop"></span>
  </div>
</template>
<script>

export default {
  name: 'SideBar',
  data() {
    return {
      show: false,
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
      if ( document.body.scrollTop > 100  || document.documentElement.scrollTop > 100 ) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    handleYsf() {
      if ( ysf ) {
        const { groupId = [] } = this;
        const o = {'North_America': '1052440', 'Oceania': '1043928', 'Europe': '1052439'};
        const gid = groupId.length ? groupId[0].replace(' ', '_') : '';
        ysf.config({ groupid: o[gid] || 955150 });
        ysf.open({ templateId: 2484043 });
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
<template>
  <div>
    <div :class="{detail: true, leave}" ref="detail">
      <Travel :detail-info="detail || {}"/>
      <Reservation :detail-info="detail" v-if="showBottom"/>
      <Error :error="errorModal.show" :text="errorModal.text" :callback="changeState"/>
      <SideBar :callback="goBack"/>
    </div>
    <Loading :loading="loading"/>
    <Consulting />
  </div>
  
</template>

<script>
import Vue from 'vue';
import { mapState, mapMutations, mapActions } from 'vuex';
import Travel from './components/travel';
import Reservation from '@/components/reservation';
import Loading from '@/components/loading';
import Error from '@/components/error';
import SideBar from '@/components/sidebar';
import Consulting from '@/components/consulting';

export default {
  name: 'DetailInfo',
  data() {
    return {
      startx: 0,
      starty: 0,
      endx: 0, 
      endy: 0,
      leave: false,
      showBottom: true
    }
  },
  created(){
    const { id } = this.$route.params;
    if ( id ) {
      if( !this.$store.state.detail.detail ) {
        this.getDetailInfo(id);
      } else {
        this.changeState({key: 'loading', value: false});
      }
    }
  },
  components: { 
    Travel, Reservation, Loading, Error, SideBar, Consulting
  },
  computed: {
    ...mapState('detail', {
      detail: state => state.detail,
      loading: state => state.loading,
      errorModal: state => state.errorModal
    })
  },
  methods: {
    ...mapActions('detail', {
      getDetailInfo: 'getDetailInfo'
    }),
    ...mapMutations('detail', {
      changeState: 'CHANGE_STATE'
    }),
    prevPage (e) {
      this.leave = true;
      this.showBottom = false;
      setTimeout(() => {
        this.changeState({key: 'loading', value: true});
      }, 800);
      setTimeout(() => {
        this.$router.replace(`/custom/detail/about/${this.$route.params.id}`);
      }, 1000);
    },
    handleTouchEnd(e) {
      const a = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      const b = document.documentElement.scrollTop==0? document.body.scrollTop : document.documentElement.scrollTop;
      const c = document.documentElement.scrollTop==0? document.body.scrollHeight : document.documentElement.scrollHeight;
      if(document.body.scrollTop==0&&document.documentElement.scrollTop==0){ // 触顶
        let { startx, starty } = this;
        let endx = e.changedTouches[0].pageX;
        let endy = e.changedTouches[0].pageY;
        let angx = endx - startx;
        let angy = endy - starty;
        let angle = Math.atan2(angy, angx) * 180 / Math.PI;
        //如果滑动距离太短
        if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
          return;
        }
        if (angle > 45 && angle < 135) { // 下拉
          e.preventDefault();
          this.prevPage();
        }
      }
    },
    handleTouchStart(e) {
      this.startx = e.touches[0].pageX;
      this.starty = e.touches[0].pageY;
    },
    goBack() {
      this.$router.replace(`/custom/detail/about/${this.$route.params.id}`);
    }
  },
  mounted () {
    document.addEventListener("touchstart", this.handleTouchStart);
    document.addEventListener("touchmove", this.handleTouchEnd);
  },
  destroyed () {
    document.removeEventListener("touchstart", this.handleTouchStart);
    document.removeEventListener("touchmove", this.handleTouchEnd);
  },
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
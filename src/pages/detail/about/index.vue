<template>
  <div>
    <div :class="{detail: true, leave}" ref="detail">
      <Banner :detail-info="detail"/>
      <Reservation :detail-info="detail" v-if="showBottom"/>
      <Next :next="nextPage"/>
      <Error :error="errorModal.show" :text="errorModal.text" :callback="changeState"/>
      <SideBar :group-id="detail ? detail.ancestorsName : null"/>
    </div>
    <Loading :loading="loading"/>
  </div>
</template>

<script>
import Banner from './components/banner';
import Reservation from '@/components/reservation';
import Next from './components/next';
import Loading from '@/components/loading';
import Error from '@/components/error';
import SideBar from '@/components/sidebar';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'DetailAbout',
  data() {
    return {
      startx: 0,
      starty: 0,
      endx: 0, 
      endy: 0,
      result: 0,
      leave: false,
      showBottom: true,
    }
  },
  components: { 
    Banner,
    Reservation,
    Next,
    Loading,
    Error,
    SideBar
  },
  created(){
    const { id } = this.$route.params;
    if ( !this.detail || this.detail.product.productCode != id ) {
      this.getDetailInfo(id);
    } else {
      this.changeState({key: 'loading', value: false});
    }
  },
  computed: {
    ...mapState('detail', {
      detail: state => state.detail,
      loading: state => state.loading,
      errorModal: state => state.errorModal
    }),
  },
  methods: {
    ...mapActions('detail', {
      getDetailInfo: 'getDetailInfo',
    }),
    ...mapMutations('detail', {
      changeState: 'CHANGE_STATE'
    }),
    nextPage (e) {
      this.leave = true;
      this.showBottom = false;
      setTimeout(() => {
        this.changeState({key: 'loading', value: true});
      }, 800);
      setTimeout(() => {
        this.$router.replace(`/custom/detail/info/${this.$route.params.id}`);
      }, 1000);
    },
    handleTouchEnd(e) {
      var a = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      var b = document.documentElement.scrollTop==0? document.body.scrollTop : document.documentElement.scrollTop;
      var c = document.documentElement.scrollTop==0? document.body.scrollHeight : document.documentElement.scrollHeight;
      if(a+Math.floor(b)==c || a+Math.ceil(b)==c){ // 触底
        // alert('触底');
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
        if (angle >= -135 && angle <= -45) {
          this.nextPage();
        }
      }
    },
    handleTouchStart(e) {
      this.startx = e.touches[0].pageX;
      this.starty = e.touches[0].pageY;
    },
  },
  mounted () {
    document.addEventListener("touchstart", this.handleTouchStart);
    document.addEventListener("touchmove", this.handleTouchEnd);
  },
  destroyed () {
    document.removeEventListener("touchstart", this.handleTouchStart);
    document.removeEventListener("touchmove", this.handleTouchEnd);
  },
  updated() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
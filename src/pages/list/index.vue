<template>
  <div class="list-page">
    <div class="menu">
      <span 
        @click="changeState({key: 'showCountryModal', value: true})"
        :class="{cur: countrySelectList.length > 0}"
      >
        {{selectList}}
      </span>
      <span 
        @click="changeState({key: 'showDaysModal', value: true})" 
        :class="{cur: days.min && days.max}"
      >
        {{days.min && days.max ? `${days.min}-${days.max}天` : '天数'}}
      </span>
      <i><User /></i>
    </div>
    <Days 
      :show-days-modal="showDaysModal" 
      :days-fake="daysFake" 
    />
    <Country 
      :show-country-modal="showCountryModal" 
      :country-list="countryList" 
      :country-select-fake="countrySelectFake"
    />
    <None v-if="!list.length"/>
    <Products 
      v-if="list.length" 
      :list-data="list" 
      :has-more="hasMore"
      :loading="loading"
    />
    <SideBar />
    <!-- <Loading :loading="loading"/> -->
    <Error :error="errorModal.show" :text="errorModal.text" :callback="changeState"/>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import Loading from '@/components/loading';
import User from '@/components/user';
import Error from '@/components/error';
import SideBar from '@/components/sidebar';
import None from './components/none';
import Country from './components/country';
import Days from './components/days';
import Products from './components/list';
import formatUrlOptions from '@/utils/url';

export default {
  name: 'List',
  data() {
    return {
      timer: null,
      hasMore: true,
    }
  },
  components: { 
    Loading,
    User,
    None,
    Country,
    Days,
    Products,
    Error,
    SideBar
  },
  computed: {
    ...mapState('list', {
      loading: state => state.loading,
      countryList: state => state.countryList,
      countrySelectList: state => state.countrySelectList,
      countrySelectFake: state => state.countrySelectFake,
      showCountryModal: state => state.showCountryModal,
      showDaysModal: state => state.showDaysModal,
      daysFake: state => state.daysFake,
      list: state => state.list,
      days: state => state.days,
      startFrom: state => state.startFrom,
      total: state => state.total,
      errorModal: state => state.errorModal
    }),
    selectList() {
      let list = [];
      const { countryList, countrySelectList } = this;
      const first = countryList.find(v=>v.key === countrySelectList[0]);
      return first ? `${first.displayName}${countrySelectList.length > 1 ? '...':''}` : '国家';
    }
  },
  methods: {
    ...mapMutations('list', {
      changeState: 'CHANGE_STATE',
      getParamsByUrl: 'GET_PARAMSBYURL'
    }),
    ...mapActions('list', {
      getList: 'getList'
    }),
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
          if ( this.timer ) clearTimeout( this.timer);
          this.timer = setTimeout(() => {
            if ( this.total > this.list.length ) {
              !this.loading && this.getList();
            } else {
              this.hasMore = false;
            }
          }, 300);
        }
      }
    },
    handleTouchStart(e) {
      this.startx = e.touches[0].pageX;
      this.starty = e.touches[0].pageY;
    }
  },
  created() {
    let { options } = this.$route.params;
    if (options) {
      this.getParamsByUrl(formatUrlOptions(options));
    }
  },
  mounted() {
    this.getList();
    document.addEventListener("touchstart", this.handleTouchStart);
    document.addEventListener("touchmove", this.handleTouchEnd);
  },
  destroyed () {
    document.removeEventListener("touchstart", this.handleTouchStart);
    document.removeEventListener("touchmove", this.handleTouchEnd);
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
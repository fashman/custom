<template>
  <div class="days" ref="daysModal" v-show="showDaysModal">
    <div class="inbox">
      <h3>想去几天</h3>
      <span @click="closeModal" class="close"></span>
      <div class="box">
        <div class="item">
          <swiper :options="swiperMinOption" ref="minSwiper" @slideChange="minSlideChange">
            <swiper-slide>滑动选择</swiper-slide>
            <swiper-slide v-for="(a, b) in new Array(30)" :key="b">{{ b + 1}}</swiper-slide>
          </swiper>
        </div>
        <div class="line"></div>
        <div class="item">
          <swiper :options="swiperMaxOption" :active-index="daysFake.max" ref="maxSwiper" @slideChange="maxSlideChange">
            <swiper-slide>滑动选择</swiper-slide>
            <swiper-slide v-for="(a, b) in new Array(30)" :key="b">{{ b + 1}}</swiper-slide>
          </swiper>
        </div>
      </div>
      <div @click="submitDaysCheck" class="btns">确定</div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import formatUrlOptions from '@/utils/url';

export default {
  name: 'Days',
  data() {
    return {
      swiperMinOption: {
        direction: 'vertical',
        notNextTick: true,
      },
      swiperMaxOption: {
        direction: 'vertical',
        notNextTick: true,
      }
    }
  },
  props: ['daysFake', 'showDaysModal'],
  components: {
    swiper, swiperSlide
  },
  methods: {
    ...mapMutations('list', {
      closeModal: 'CLOSE_DAYSMODAL',
      changeState: 'CHANGE_STATE'
    }),
    submitDaysCheck() {
      const { daysFake } = this;
      const min = Math.min(daysFake.min, daysFake.max);
      const max = Math.max(daysFake.min, daysFake.max);
      let { ct, ic, at, d } = formatUrlOptions( this.$route.params.options );
      ct = ct ? `ct_${ct}` : '';
      ic = ic ? `${ct ? '-' : ''}ic_${ic}` : '';
      at = at ? `${ct || ic ? '-' : ''}at_${at}` : '';
      d = daysFake.min && daysFake.max ? `${ct || ic || at ? '-' : ''}d_${min}_${max}` : '';
      location.href = !ct && !ic && !at && !d ? '/custom/list' : `/custom/list/${ct}${ic}${at}${d}`;
    },
    minSlideChange() {
      const min = this.$refs.minSwiper.swiper.activeIndex || null;
      this.changeState({ key: 'daysFake', value: { ...this.daysFake, min }});
    },
    maxSlideChange() {
      const max = this.$refs.maxSwiper.swiper.activeIndex || null;
      this.changeState({ key: 'daysFake', value: { ...this.daysFake, max }});
    },
  },
  updated() {
    if ( this.$refs.minSwiper && this.$refs.maxSwiper ) {
      this.$refs.minSwiper.swiper.slideTo(this.daysFake.min || 0, 1000, false);
      this.$refs.maxSwiper.swiper.slideTo(this.daysFake.max || 0, 1000, false);
    }
  },
  mounted() {
    this.$refs.daysModal.addEventListener('touchmove', (e) => {
      e.preventDefault();
    });
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
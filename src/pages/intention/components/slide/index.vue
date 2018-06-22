<template>
  <div class="slide-box">
    <swiper @slideChangeTransitionEnd="slideChangeTransitionEnd" ref="mySwiper" :options="options">
      <swiper-slide class="p1">
        <div class="text" v-show="activeIndex === 0">
          <h3>我趣定制</h3>
          <p class="t1">不必太贵<span></span>不用操心</p>
          <p class="t2">适合你的定制游</p>
        </div>
      </swiper-slide>
      <swiper-slide class="p2">
        <div class="text" v-show="activeIndex === 1">
          <h3>「国内+海外」<br>双定制师，贴心服务</h3>
          <div class="hr"></div>
          <p>国内定制师，深入了解您的需求<br>海外定制师，给您推荐更地道的玩法</p>
        </div>
      </swiper-slide>
      <swiper-slide class="p3">
        <div class="text" v-show="activeIndex === 2">
          <h3>按预算选择玩法<br>价格透明又不贵</h3>
          <div class="hr"></div>
          <p>根据预算，灵活搭配个性组合<br>快速报价，拒绝隐形消费</p>
        </div>
      </swiper-slide>
      <swiper-slide class="p4">
        <div class="text" v-show="activeIndex === 3">
          <h3>十一年海外经验<br>甄选旅行体验</h3>
          <div class="hr"></div>
          <p>超过3650天,专注在北美/欧洲/澳新目的地<br>深挖意想不到的体验</p>
        </div>
      </swiper-slide>
      <div class="prev" v-show="activeIndex !== 0" slot="button-prev"></div>
      <div class="next" v-show="activeIndex !== 3" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

export default {
  name: 'Slide',
  data() {
    return {
      options: {
        autoplay: {
          delay: 5000,
          stopOnLastSlide: true
        },
        navigation: {
          nextEl: '.next',
          prevEl: '.prev'
        }
      },
    }
  },
  props: ['changeState', 'activeIndex'],
  components: {
    swiper, swiperSlide
  },
  methods: {
    slideChangeTransitionEnd() {
      const activeIndex = this.$refs.mySwiper.swiper.activeIndex;
      this.changeState([
        {key: 'activeIndex', value: activeIndex}
      ]);
    }
  },
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
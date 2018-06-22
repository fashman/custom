<template>
  <div class="travel">
    <h3 class="main-title">11年海外经验 甄选旅行体验</h3>
    <p class="travel-menu">
      <span>专注</span>
      <a href="//m.woqu.com/custom/list/ct-POI_30096  " class="travel-America">北美</a>
      <span>／</span>
      <a href="//m.woqu.com/custom/list/ct-POI_30097 " class="travel-europe">欧洲</a>
      <span>／</span>
      <a href="//m.woqu.com/custom/list/ct-POI_30098" class="travel-australia">澳新</a>
      <span class="last">目的地产品</span>
    </p>
    <p class="travel-title">深挖意想不到的体验</p>
    <div class="travel-img">
      <swiper :options="swiperOption">
        <swiper-slide >
          <a href="//m.woqu.com/custom/list/sct-jiatingqinzi">
            <img src="@/images/brand/pro1.jpg" />
          </a>
        </swiper-slide>
        <swiper-slide >
          <a href="//m.woqu.com/custom/list/sct-qinyoulvxing ">
            <img src="@/images/brand/pro2.jpg" />
          </a>
        </swiper-slide>
        <swiper-slide >
          <a href="//m.woqu.com/custom/list/sct-laoyouxing ">
            <img src="@/images/brand/pro3.jpg" />
          </a>
        </swiper-slide>
         <swiper-slide >
           <a href="//m.woqu.com/custom/list/itt-meishi-Natural_Adventure--sct-laoyouxing">
             <img src="@/images/brand/pro4.jpg" />
           </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'

export default {
  name: 'Travel',
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
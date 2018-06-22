<template>
  <div class="travel J-travelBox">
    <!-- menu -->
    <div :class="{menu: true, hide: isScrollDown}">
      <Title />
      <div class="tab">
        <span @click="jumpTo(0)" :class="{cur: active < (detailInfo.itineraryList || []).length}">行程</span>
        <span @click="jumpTo(detailInfo.itineraryList.length)" :class="{cur: active === (detailInfo.itineraryList || []).length}">费用</span>
      </div>
      <!-- 天数 -->
      <div class="day-list" v-show="active < (detailInfo.itineraryList || []).length">
        <swiper :options="daylist" ref="mySwiper">
          <swiper-slide v-for="(item, index) in detailInfo.itineraryList || []" :key="index">
            <span :class="{active: index === active}" @click="jumpTo(index)">D{{ index + 1 }}</span>
          </swiper-slide>
          <div class="prev" slot="button-prev"></div>
          <div class="next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
    <!-- 行程 -->
    <div class="day-box J-scrollBox" v-for="(item, index) in detailInfo.itineraryList || []" :key="index">
      <div class="tit">
        <span>D{{ item.dayIndex }}</span>
        <h3>{{ item.titleCN }}</h3>
      </div>
      <div class="content">
        <div class="about" v-if="item.descCN" v-html="item.descCN.replace(/<br \/>/g,'')"></div>
        <div class="landscape" v-if="item.scenes && item.scenes.length">
          <h3>为你推荐的景点</h3>
          <swiper :options="landscapeOption">
            <swiper-slide v-for="(scenesItem, scenesIndex) in item.scenes || []" :key="scenesIndex">
              <img :src="scenesItem.photo || '//h5.quimg.com/h5-custom-static/dist/images/common/scence.jpg'" />
              <p>{{ scenesItem.cnName }}</p>
            </swiper-slide>
          </swiper>
        </div>
        <div class="hotel" v-if="item.hotels && item.hotels.length">
          <h3>为你安排的住宿</h3>
          <p v-for="(hotelsItem, hotelsIndex) in item.hotels" :key="hotelsIndex">
            {{ hotelsItem.titleCN || hotelsItem.titleEN }}
          </p>
        </div>
        <div class="food">
          <h3>为你安排的餐饮</h3>
          <p>早餐：{{ item.breakfast }}</p>
          <p>午餐：{{ item.lunch }}</p>
          <p>晚餐：{{ item.dinner }}</p>
        </div>
        <div class="notice" v-if="item.customFields && item.customFields.length">
          <div v-for="(noticeItem, noticeIndex) in item.customFields" :key="noticeIndex">
            <h3>{{ noticeItem.titleCN }}</h3>
            <p >
              {{ noticeItem.descCN.replace(RegTest,'') }}
            </p>
          </div>
        </div>
      </div>
      <div class="line" v-if="index !== (detailInfo.itineraryList || []).length - 1"></div>
    </div>
    <!-- 费用 -->
    <div class="cost J-scrollBox">
      <div v-if="(detailInfo && detailInfo.product ? detailInfo.product : {}).priceIncludes && (detailInfo && detailInfo.product ? detailInfo.product : {}).priceIncludes.length">
        <h3 class="tit">费用包含</h3>
        <div class="item" v-for="(includesItem, includesIndex) in (detailInfo && detailInfo.product ? detailInfo.product : {}).priceIncludes" :key="includesIndex">
          <h4>{{ includesItem.key }}</h4>
          <p>{{ includesItem.value }}</p>
        </div>
      </div>
      <div v-if="(detailInfo && detailInfo.product ? detailInfo.product : {}).priceExcludes && (detailInfo && detailInfo.product ? detailInfo.product : {}).priceExcludes.length">
        <h3 class="tit">费用不包含</h3>
        <div class="item" v-for="(excludesItem, excludesIndex) in (detailInfo && detailInfo.product ? detailInfo.product : {}).priceExcludes" :key="excludesIndex">
          <h4>{{ excludesItem.key }}</h4>
          <p>{{ excludesItem.value }}</p>
        </div>
      </div>
      <div v-if="(detailInfo && detailInfo.translation ? detailInfo.translation : {}).needToKnow && (detailInfo && detailInfo.translation ? detailInfo.translation : {}).needToKnow.length">
        <h3 class="tit">定制说明</h3>
        <div class="item"
          v-for="(needToKnowItem, needToKnowIndex) in (detailInfo && detailInfo.translation ? detailInfo.translation : {}).needToKnow" 
          v-html="needToKnowItem.content" 
          :key="needToKnowIndex"
        ></div>
      </div>
      <div v-if="(detailInfo && detailInfo.translation ? detailInfo.translation : {}).policy && (detailInfo && detailInfo.translation ? detailInfo.translation : {}).policy.length">
        <h3 class="tit">定制退改规则</h3>
        <div class="item"
          v-for="(policyItem, policyIndex) in (detailInfo && detailInfo.translation ? detailInfo.translation : {}).policy" 
          v-html="policyItem.content" 
          :key="policyIndex"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState, mapMutations, mapActions } from 'vuex';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import Title from '../title';

export default {
  name: 'Travel',
  data () {
    return {
      landscapeOption: {
        slidesPerView: 'auto',
      },
      daylist: {
        slidesPerView: 5,
        navigation: {
          nextEl: '.next',
          prevEl: '.prev'
        }
      },
      RegTest: /<[^>]+>/g,
      active: 0,
      show: false,
      isScrollDown: false,
      scrollTop: 0
    }
  },
  props: ['detailInfo'],
  components: {
     Title, swiper, swiperSlide
  },
  methods: {
    handleScroll(e) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      // this.timer = setTimeout(() => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;;
        let JscrollBox = document.querySelectorAll('.J-scrollBox');
        let JtravelBoxTop = document.querySelector('.J-travelBox').offsetTop;
        
        this.show = scrollTop > 200 ? true : false;
        this.isScrollDown = scrollTop > this.scrollTop && scrollTop > 100;
        this.scrollTop = scrollTop;

        for( let i = 0; i < JscrollBox.length; i++ ) {
          if ( JscrollBox[i].offsetTop <= scrollTop + JtravelBoxTop ) {
            this.active = i;
            this.$refs.mySwiper.swiper.slideTo(Math.floor((i + 1) / 5) * 4, 0);
          }
        }
      // }, 100);
    },
    jumpTo(index) {
      let JscrollBox = document.querySelectorAll('.J-scrollBox');
      let JtravelBoxTop = document.querySelector('.J-travelBox').offsetTop;
      this.active = index;
      window.scrollTo(0, JscrollBox[index].offsetTop - JtravelBoxTop);
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
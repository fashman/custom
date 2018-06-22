<template>
  <div class="destination" @touchmove="handleTouchmove" ref="destinationModal" v-if="showDestinationModal">
    <div class="inbox">
      <span class="close" @click="closeModal('showDestinationModal')"></span>
      <div class="fields-box">
        <swiper :options="swiperOption">
          <swiperSlide class="text">
          <div 
            v-for="value in facetFieldsFake" 
            :key="value.field" 
            v-if="facetFieldsFake.length && type.indexOf(value.field) > -1 && value.facetItems.length"
          >
            <div class="title">
              <h3>{{ value.fieldDisplay }}</h3>
              <span 
                @click="toogleShow(value.field)" 
                v-if="value.facetItems.length > 6"
                :class="{cur: showMore[value.field]}"
              >更多<i></i></span>
            </div>
            <div class="list">
              <label 
                :class="{cur: facetFieldsSelectFake[value.field].find(v=> v === val.key)}" 
                v-for="(val, ind) in value.facetItems" 
                :key="val.key" 
                v-show="showMore[value.field] || ind < 6"
              >
                <input @change="handleChange($event, value.field)" v-model="facetFieldsSelectFake[value.field]" type="checkbox" :value="val.key" />
                {{ val.displayName }}
              </label>
            </div>
          </div>
          </swiperSlide>
        </swiper>
      </div>
      <div class="btns">
        <span class="resert" @click="resert">重置</span>
        <span v-if="preTotal > 0" class="check" @click="submitSearch">查看{{ preTotal }}条线路</span>
        <span v-else class="check small" @click="handleYsf">暂无线路，咨询定制师</span>
      </div>
      <div v-if="preloading" class="loadmore">
        <p>
          <span></span>
          <span></span>
          <span></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

export default {
  name: 'Destination',
  data() {
    return {
      type: ['continent', 'country', 'area', 'city'],
      showMore: {},
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
      }
    }
  },
  components: { swiper, swiperSlide },
  props: [
    'showDestinationModal', 
    'facetFieldsFake', 
    'facetFieldsSelectFake', 
    'preTotal', 
    'preloading',
    'resert',
    'closeModal',
    'clearDestination',
    'getPreList',
    'submitSearch'
  ],
  methods: {
    toogleShow(type) {
      this.$set(this.showMore, type, !this.showMore[type]);
    },
    handleChange(e, type) {
      if (type === 'continent') {
        this.clearDestination(['country', 'area', 'city']);
      } else if (type === 'country') {
        this.clearDestination(['area', 'city']);
      } else if (type === 'area') {
        this.clearDestination(['city']);
      }
      this.getPreList();
    },
    handleYsf() {
      if ( ysf ) {
        ysf.open({ templateId: 2484043 });
      }
    },
    handleTouchmove(e) {
      e.preventDefault();
    },
  },
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
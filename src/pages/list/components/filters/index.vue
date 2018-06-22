<template>
  <div class="filters" @touchmove="handleTouchmove" ref="filterModal" v-if="showFilterModal">
    <div class="inbox">
      <span class="close" @click="closeModal('showFilterModal')"></span>
      <div class="fields-box">
        <swiper :options="swiperOption">
          <swiperSlide class="text">
          <div 
            v-for="value in facetFieldsFake" 
            :key="value.field" 
            v-if="facetFieldsFake.length && type.indexOf(value.field) > -1 && value.facetItems.length"
          >
            <div v-if="value.field === 'search_price'">
              <div class="title">
                <h3>
                  人均价格
                  <span v-if="facetFieldsSelectFake.search_price[0] !== facetFieldsSelectFake.search_price[1]">
                    ￥{{facetFieldsSelectFake.search_price[0]}}-￥{{facetFieldsSelectFake.search_price[1]}}
                  </span>
                </h3>
              </div>
              <div class="price">
                <vue-slider 
                  v-if="showFilterModal && value.facetItems.length > 1" 
                  formatter='¥{value}' 
                  v-model="facetFieldsSelectFake.search_price"
                  :min="Math.floor(value.facetItems[0].score || 0)"
                  :max="Math.ceil(value.facetItems[1].score || 1000)"
                  @callback="handleChange"
                  :lazy="true"
                  :clickable="false"
                  :dot-size="28"
                />
              </div>
            </div>
            <div v-else>
              <div class="title" v-if="value.field === 'duration'">
                <h3>{{ value.fieldDisplay}}</h3>
                <span 
                  @click="toogleShow(value.field)" 
                  v-if="value.facetItems.length > 8"
                  :class="{cur: showMore[value.field]}"
                >更多<i></i></span>
              </div>
              <div class="title" v-else>
                <h3>{{ value.fieldDisplay}}</h3>
                <span 
                  @click="toogleShow(value.field)" 
                  v-if="value.facetItems.length > 6"
                  :class="{cur: showMore[value.field]}"
                >更多<i></i></span>
              </div>
              <div class="list" v-if="value.field === 'duration'">
                <!-- 天数样式要特别点 -->
                <label
                  :class="{
                    cur: facetFieldsSelectFake[value.field].find(v=> v === val.key), 
                    day: true
                  }" 
                  v-for="(val, ind) in value.facetItems" 
                  :key="val.key" 
                  v-show="showMore[value.field] || ind < 8"
                >
                  <input @change="handleChange" v-model="facetFieldsSelectFake[value.field]" type="checkbox" :value="val.key" />
                  {{ val.displayName }}
                </label>
              </div>
              <div class="list" v-else>
                <label
                  :class="{cur: facetFieldsSelectFake[value.field].find(v=> v === val.key)}" 
                  v-for="(val, ind) in value.facetItems" 
                  :key="val.key" 
                  v-show="showMore[value.field] || ind < 6"
                >
                  <input @change="handleChange" v-model="facetFieldsSelectFake[value.field]" type="checkbox" :value="val.key" />
                  {{ val.displayName }}
                </label>
              </div>
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
import vueSlider from 'vue-slider-component';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

export default {
  name: 'Filters',
  data() {
    return {
      type: ['duration', 'start_location', 'end_location', 'search_price'],
      showMore: {},
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
      }
    }
  },
  props: [
    'showFilterModal', 
    'facetFieldsFake', 
    'facetFieldsSelectFake', 
    'preTotal',
    'preloading',
    'resert',
    'closeModal',
    'getPreList',
    'submitSearch'
  ],
  components: { vueSlider, swiper, swiperSlide },
  methods: {
    toogleShow(type) {
      this.$set(this.showMore, type, !this.showMore[type]);
    },
    handleChange() {
      this.getPreList();
    },
    handleYsf() {
      if ( ysf ) {
        ysf.open({ templateId: 2484043 });
      }
    },
    handleTouchmove(e) {
      e.preventDefault();
    }
  },
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
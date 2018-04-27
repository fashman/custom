<template>
  <div class="country" ref="countryModal" v-show="showCountryModal">
    <div class="inbox">
      <h3>想去的地方</h3>
      <span @click="closeModal" class="close"></span>
      <div class="list">
        <swiper :options="swiperOption">
          <swiper-slide class="text">
            <div class="content">
              <ul>
                <li 
                  @click="toggleCountrySelect({country:item.key})" 
                  v-for="(item, index) in countryList" 
                  :key="index"
                  :class="{cur: countrySelectFake.find(v=>v === item.key)}"
                >
                  {{item.displayName}}
                </li>
              </ul>
            </div>
          </swiper-slide>
          <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>
      </div>
      <div class="btns">
        <span @click="resertCountryList">清除</span>
        <div @click="mapGetList">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import formatUrlOptions from '@/utils/url';

export default {
  name: 'Country',
  data() {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
          el: '.swiper-scrollbar'
        },
        mousewheel: true
      }
    }
  },
  props: ['countryList', 'countrySelectFake', 'showCountryModal'],
  components: { swiper, swiperSlide },
  methods: {
    ...mapMutations('list', {
      toggleCountrySelect: 'TOGGLE_COUNTRYSELECT',
      closeModal: 'CLOSE_COUNTRYMODAL',
      resertCountryList: 'RESERT_COUNTRYSELECTLIST',
    }),
    mapGetList() {
      const { countrySelectFake } = this;
      let { ct, ic, at, d } = formatUrlOptions(this.$route.params.options);
      ct = ct ? `ct_${ct}` : '';
      ic = countrySelectFake.length ? `${ct ? '-' : ''}ic_${countrySelectFake.join('_')}` : '';
      at = at ? `${ct || ic ? '-' : ''}at_${at}` : '';
      d = d ? `${ct || ic || at ? '-' : ''}d_${d}` : '';
      location.href =  !ct && !ic && !at && !d ? '/custom/list' : `/custom/list/${ct}${ic}${at}${d}`;
    },
  },
  mounted() {
    this.$refs.countryModal.addEventListener('touchmove', (e) => {
      e.preventDefault();
    });
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
<template>
  <div class="intention">
    <Header />
    <swiper ref="swiperRef" :options="swiperOption" @transitionStart="transitionStart">
      <swiper-slide>
        <Music :index="activeIndex"/>
        <Slide :change-state="changeState" :active-index="activeIndex"/>
        <Round :index="activeIndex" :change-state="changeState" :swiper-ref="swiperRef"/>
      </swiper-slide>
      <swiper-slide>
        <swiper :options="swiperOption2">
          <swiper-slide class="scroll-swiper">
            <Form  :form-data="data"/>    
          </swiper-slide>
        </swiper>
      </swiper-slide>
    </swiper>
    <!-- 父元素存在 transform 属性导致 子元素 position: fixed 无效 -->
    <Buttons :form-data="data" v-show="showButtons"/>
    <Success :success="success"/>
    <Loading :loading="loading"/>
    <Error :error="errorModal.show" :text="errorModal.text" :callback="changeState"/>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import Form from './components/form';
import Buttons from './components/buttons';
import Error from '@/components/error';
import Success from './components/success';
import Loading from '@/components/loading';
import Header from '@/components/header';
import Slide from './components/slide';
import Music from './components/music';
import Round from './components/round';

export default {
  name: 'Intention',
  data() {
    return {
      swiperOption: {
        direction: 'vertical',
      },
      swiperOption2: {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        nested:true,
      },
      showButtons: false,
      swiperRef: null
    }
  },
  components: { 
    swiper, swiperSlide,
    Loading, Form, Buttons, Error, Success,
    Header,
    Slide, Music, Round
  },
  computed: {
    ...mapState('intention', {
      loading: state => state.loading,
      success: state => state.success,
      data: state => state.data,
      errorModal: state => state.errorModal,
      activeIndex: state => state.activeIndex,
      showAbout: state => state.showAbout,
    }),
  },
  methods: {
    ...mapMutations('intention', {
      resert: 'RESERT_ALL',
      changeState: 'CHANGE_STATE'
    }),
    transitionStart() {
      const activeIndex = this.swiperRef.activeIndex;
      if (activeIndex === 1) {
        this.showButtons = true;
      } else {
        this.showButtons = false;
      }
    }
  },
  mounted() {
    this.resert();
    this.$nextTick(() => {
      this.swiperRef = this.$refs.swiperRef.swiper;
    });
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
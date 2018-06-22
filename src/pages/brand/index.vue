<template>
  <div>
    <Parallax :fixed="true">
      <header>
        <img src="@/images/brand/header.jpg" alt="" class="header-img">
        <a href="//m.woqu.com/custom/intention" class="header-button">
          <img src="@/images/brand/wechat-icon.png" alt="">
          <span>一对一定制服务</span>
        </a>
        <span class="moreButton"></span>
      </header>
    </Parallax>
     <Title :title="detail ? detail.title : ''"/>
    <a href="//m.woqu.com/custom/intention" class="goIntention"></a>
    <div class="content">
      <Menu />
      <Customer 
        :callback="changeState"
        :customerInfo="customerInfo"
        :setWechatModal="setWechatModal"
        :setSideBar="setSideBar"
      />
      <Travel />
      <Performance />
      <About />
      <SubmitModal 
        :invite="inviteModal"
        :closeModal="changeState"
        :submitInvite="submitInvite"
        :contactInfo="contactInfo"
        :setSideBar="setSideBar"
        :clearContactInfo="clearContactInfo"
      />
      <Success :success="success"/>
      <Error :error="errorModal.show" :text="errorModal.text" :callback="changeState"/>
      <Wechat :wechat="wechatModal" :callback="changeState"/>
      <SideBar v-show="sideBar"/>
      <Consulting />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import Parallax from 'vue-parallaxy';
import SideBar from '@/components/sidebar';
import Wechat from './components/wechat';
import Error from '@/components/error';
import Consulting from '@/components/consulting';
import Menu from './components/menu';
import Customer from './components/customer';
import Travel from './components/travel';
import Performance from './components/performance';
import About from './components/about';
import SubmitModal from './components/submitModal';
import Success from './components/success';
import Title from './components/title';

export default {
  name: 'Brand',
  data() {
    return {
      sideBar: true
    }
  },
  components: {
    SideBar,
    Menu,
    Customer,
    Parallax,
    Travel,
    Performance,
    About,
    SubmitModal,
    Wechat,
    Error,
    Success,
    Title,
    Consulting
  },
  computed: {
    ...mapState('brand', {
      inviteModal: state => state.inviteModal,
      errorModal: state => state.errorModal,
      contactInfo: state => state.contactInfo,
      customerInfo: state => state.customerInfo,
      wechatModal: state => state.wechatModal,
      success: state => state.success,
      detail: state => state.detail,
    })
  },
  methods: {
    ...mapMutations('brand', {
      changeState: 'CHANGE_STATE',
      setWechatModal: 'SET_WECHAT_MODAL',
      clearContactInfo: 'CLEAR_CONTACTINFO'
    }),
    ...mapActions('brand', {
      submit: 'submit',
      getDesigner: 'getDesigner',
    }),
    submitInvite() {
      this.submit({
        designerInfo: {
          nickName: this.inviteModal.data.name,
          email: this.inviteModal.data.email,
          id: this.inviteModal.data.id
        },
        contactInfo: this.contactInfo,
        channel: 'WOQU',
        source: 'H5'
      })
    },
    setSideBar(data) {
      this.sideBar = data;
    }
  },
  mounted() {
    this.getDesigner();
  }
}
</script>

<style lang="less">
   @import './index.less';
</style>


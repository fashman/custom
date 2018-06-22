<template>
    <div class="submitModal" ref="submitModal" v-show="invite.show">
      <div class="modal-content">
        <p class="title">
          我邀请<span>{{invite.data.name}}</span>提供定制服务
        </p>
        <div class="errorHint" v-if="errorHint.show">
          <img src="./images/errorIcon.png" alt="">
          <span>{{errorHint.text}}</span>
        </div>
        <div class="form-data">
          <div class="form-item">
            <div class="label">联系人</div>
            <input
              type="text"
              placeholder="请输入你的姓名"
              @focus="focus"
              v-model="contactInfo.name">
          </div>
          <div class="form-item">
            <select v-model="contactInfo.countryCode">
              <option v-for="(item, index) in phoneTypeList" :key="index" :value="item.code">
                +{{item.code}} {{item.name}}
              </option>
            </select>
            <input
              type="number"
              placeholder="请输入你的电话"
              @focus="focus"
              v-model="contactInfo.mobile">
          </div>
        </div>
        <p>
          <span class="submit-btn" @click="submit">提交定制</span>
        </p>
        <span
          class="close-btn"
          @click="close">
        </span>
      </div>
    </div>

</template>

<script>
import { phoneTypeList, phoneRegExpTest } from '@/utils/phoneCheck';

export default {
  name: 'SubmitModal',
  data() {
    return {
      phoneTypeList,
      errorHint: {
        show: false,
        text: ''
      },
    }
  },
  props: ['invite', 'closeModal', 'submitInvite', 'contactInfo', 'setSideBar', 'clearContactInfo'],
  methods: {
    submit() {
      const { mobile, name, countryCode } = this.contactInfo;
      if (!name) {
        this.errorHint = {
          show: true,
          text: '请填写姓名'
        }
      } else {
        const type = phoneTypeList.find((v, i) => v.code === countryCode).key;
        const checkPhone = phoneRegExpTest( type, mobile);
        if (!checkPhone.code) {
          this.errorHint = {
            show: true,
            text: checkPhone.msg
          }
        } else {
          this.submitInvite();
        }
      }
    },
    focus() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      document.querySelector('.submitModal').classList.add('location');
      this.errorHint = {
        show: false,
        text: ''
      }
    },
    close() {
      document.querySelector('.submitModal').classList.remove('location');
      this.closeModal({
        key: 'inviteModal',
        value: {
          show: false,
          data: {}
        }
      });
      this.setSideBar(true);
      this.clearContactInfo()
    }
  },
  mounted() {
    this.$refs.submitModal.addEventListener('touchmove', (e) => {
      e.preventDefault();
    });
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
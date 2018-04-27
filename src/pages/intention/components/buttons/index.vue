<template>
  <div class="buttons">
    <div class="kefu" @click="handleYsf"></div>
    <div class="order" @click="handleSubmit">提交需求</div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import { phoneTypeList, phoneRegExpTest } from '@/utils/phoneCheck';

export default {
  name: 'Buttons',
  props: ['formData'],
  methods: {
    ...mapActions('intention', {
      submitForm: 'submitForm'
    }),
    ...mapMutations('intention', {
      changeState: 'CHANGE_STATE'
    }),
    handleSubmit() {
      const { contactInfo } = this.formData;
      const { mobile, name, countryCode } = contactInfo;
      const type = phoneTypeList.find((v, i) => v.code === countryCode).key;
      const checkPhone = phoneRegExpTest( type, mobile);
      if ( !name ) {
        this.changeState({key: 'errorModal', value: { show: true, text: '请填写联系人信息'}});
        return;
      } else if ( !checkPhone.code ) {
        this.changeState({key: 'errorModal', value: { show: true, text: checkPhone.msg}});
        return;
      } else {
        this.submitForm({data: this.formData});
      }
    },
    handleYsf() {
      if ( ysf ) {
        ysf.open({
          templateId: 2484043
        });
      }
    }
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
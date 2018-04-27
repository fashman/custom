<template>
  <div class="intention">
    <Form :form-data="data"/>    
    <Buttons :form-data="data"/>
    <Success :success="success"/>
    <Loading :loading="loading"/>
    <Error :error="errorModal.show" :text="errorModal.text" :callback="changeState"/>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import Form from './components/form';
import Buttons from './components/buttons';
import Error from '@/components/error';
import Success from './components/success';
import Loading from '@/components/loading';

export default {
  name: 'Intention',
  components: { 
    Loading,
    Form,
    Buttons,
    Error,
    Success,
  },
  computed: {
    ...mapState('intention', {
      loading: state => state.loading,
      success: state => state.success,
      data: state => state.data,
      errorModal: state => state.errorModal
    }),
  },
  methods: {
    ...mapMutations('intention', {
      resert: 'RESERT_ALL',
      changeState: 'CHANGE_STATE'
    })
  },
  mounted() {
    this.resert();
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
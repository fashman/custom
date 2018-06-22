import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  namespaced: true,
  state() {
    return {
      errorModal: {
        show: false,
        text: ''
      },
      inviteModal: {
        show: false,
        data: {
          name: '',
          email: '',
          id: ''
        }
      },
      contactInfo: {
        countryCode: '86',
        mobile: '',
        name: ''
      },
      customerInfo: {},
      wechatModal: {
        show: false,
        data: null
      },
      success: false,
      detail: null,
    }
  },
  actions,
  getters,
  mutations
}
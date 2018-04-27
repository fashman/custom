import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  namespaced: true,
  state() {
    return {
      loading: false,
      success: false,
      data: {
        destinations: '', 
        peopleNums: null, 
        duration: null, 
        customeDemand: '',
        source:'H5',
        channel:'WOQU', 
        contactInfo: {
          mobile: '',
          name: '',
          countryCode: '86',
        }
      },
      errorModal: {
        show: false,
        text: ''
      }
    }
  },
  actions,
  getters,
  mutations
};

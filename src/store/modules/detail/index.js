import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  namespaced: true,
  state() {
    return {
      detail: null,
      loading: false,
      errorModal: {
        show: false,
        text: ''
      },
    }
  },
  actions,
  getters,
  mutations
};

import { getDesignerInfo, submitCustom } from '@/api';
import { SET_CUSTOMER_INFO, CHANGE_STATE } from './mutations';

export default {
  async getDesigner({ commit, state }, payload) {
    try {
      let res =  await getDesignerInfo(payload);
      if (res.rs === 1) {
        commit(SET_CUSTOMER_INFO, res.data);
      } else {
        commit(CHANGE_STATE, { key: 'errorModal', value: {
          show: true, text: `获取金牌定制师信息失败，${res.msg}`
        }});
      }
    } catch (error) {
      commit(CHANGE_STATE, { key: 'errorModal', value: {
        show: true, text: '网络异常，请稍后重试'
      }});
    }
  },

  async submit({ commit, state }, payload) {
    try {
      let res =  await submitCustom(payload);
      if (res.result) {
        commit(CHANGE_STATE, { 
          key: 'inviteModal', 
          value: {
            show: false,
            data: {}
          } 
        });
        commit(CHANGE_STATE, { key: 'success', value: true });
      } else {
        commit(CHANGE_STATE, { 
          key: 'inviteModal', 
          value: {
            show: false,
            data: {}
          } 
        });
        commit(CHANGE_STATE, { key: 'errorModal', value: {
          show: true, text: `提交定制失败，${res.msg}`
        }});
      }
    } catch (error) {
      commit(CHANGE_STATE, { key: 'errorModal', value: {
        show: true, text: '网络异常，请稍后重试'
      }});
    }
  }
}
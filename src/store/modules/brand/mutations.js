export const CHANGE_STATE = 'CHANGE_STATE';
export const SET_CUSTOMER_INFO = 'SET_CUSTOMER_INFO';
export const CLEAR_CONTACTINFO = 'CLEAR_CONTACTINFO';

export default {
	[CHANGE_STATE](state, payload) {
    const { key, value } = payload;
    state[key] = value;
  },
  [SET_CUSTOMER_INFO](state, payload) {
    state.customerInfo = payload;
  },
  [CLEAR_CONTACTINFO](state, payload) {
    state.contactInfo = {
      countryCode: '86',
      mobile: '',
      name: ''
    }
  }
}
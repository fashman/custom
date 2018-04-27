import axios from 'axios';

// 测试
export const getList = () => axios({ 
  url: '//api.github.com/users'
}).then(res => res.data);

// 首页
export const getIndexInfo = data => axios({
  data: JSON.stringify({
    Req_Header: { appid: 'WOQUWAP001', app_version: '1.2', cmd: 'custom_index' },
    Req_Body: {}
  }),
  method: 'post',
  url: '//api.woqu.com/mobile',
}).then(res => res.data);

// 意向单提交
export const submitIntention = data => axios({
  data,
  method: 'post',
  url: '//m.woqu.com/custom/intent/create',
}).then(res => res.data);

// 列表页---获取产品列表
export const getProductList = data => axios({
  data: JSON.stringify({
    Req_Header: { appid: 'WOQUWAP001', app_version: '1.2', cmd: 'custom_list' },
    Req_Body: {
      continent: '',
      currency: 'CNY',
      returnNumber: 10,
      subTypes: [],
      startFrom: 1,
      countries: [],
      durationRangeStart: null,
      durationRangeEnd: null,
      ...data
    }
  }),
  method: 'post',
  url: '//api.woqu.com/mobile',
}).then(res => res.data);

// 详情页
export const getDetail = id => axios({ 
  url: '//api.woqu.com/mobile',
  method: 'post',
  data: JSON.stringify({
    Req_Header: { appid: 'WOQUWAP001', app_version: '1.2', cmd: 'custom_detail' },
    Req_Body: { productCode: id }
  }),
}).then(res => res.data);

// 判断是否登录
export const checkLogin = () => axios({ 
  url: '//m.woqu.com/member/check-is-login',
}).then(res => res.data);
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
      currency: 'CNY',
      returnNumber: 10,
      startFrom: 1,
      continent: '',
      countries: [],
      durations: [],
      areas: [],
      cities: [],
      startLocations: [],
      endLocations: [],
      interestTopicTags: [],
      suitableCrowdTags: [],
      price: [0, 1000],
      sort: 0,
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

// 获取定制师信息
export const getDesignerInfo = () => axios({
  data: JSON.stringify({
    Req_Header: { appid: 'WOQUWAP001', app_version: '1.2', cmd: 'custom_designer'},
    Req_Body: {}
  }),
  method: 'post',
  url: '//api.woqu.com/mobile'
}).then(res => res.data);

//提交定制
export const submitCustom = (data) => axios({
  data,
  method: 'post',
  url: '//m.woqu.com/custom/intent/create',
  headers:{'Content-Type': 'application/json'},
}).then(res => res.data);

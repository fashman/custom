import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  index: null,
  loading: true,
  errorModal: {
    show: false,
    text: ''
  },
  wechatModal: {
    show: false,
    data: null
  },
	customers: {
    au: [
      {
        nameCn: '贾美玉',
        nameEn: 'Jennifer Jia',
        customer: '在深圳，从业4年，服务过3000人，会普通话、英语',
        travel: '奥克兰、基督城、皇后镇、但尼丁、库克山、蒂卡波、米尔福德峡湾、奥马鲁等',
        wx: 'wqtc8319',
        img: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/au1.jpg',
        wechat: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/wechat_jiameiyu.png'
      },
      {
        nameCn: '刘伟',
        nameEn: 'Louis',
        customer: '在深圳，从业6年，服务过3000人，会普通话、英语',
        travel: '奥克兰、基督城、皇后镇、库克山、蒂卡波、米尔福德峡湾、奥马鲁、墨尔本大洋路、悉尼、黄金海岸等',
        wx: 'wqtc8603',
        img: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/au2.jpg',
        wechat: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/wechat_liuwei.png'
      },
      {
        nameCn: '叶馨咛',
        nameEn: 'Anita Ye',
        customer: '在奥克兰，从业5年，服务过2000人，会普通话、四川话、英语',
        travel: '皇后镇、基督城、福克斯冰川、罗托鲁瓦、凯库拉、悉尼、墨尔本大洋路、黄金海岸、凯恩斯大堡礁等',
        wx: 'LULUTRIP-ANZ',
        img: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/au3.jpg',
        wechat: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/wechat_yexinning.png'
      },
    ],
    na: [
      {
        nameCn: '周硕',
        nameEn: 'Aries Zhou',
        customer: '在旧金山，从业5年，服务过5000人，会普通话、上海话、英语',
        travel: '旧金山、洛杉矶、拉斯维加斯大峡谷、纽约、华盛顿、波士顿、盐湖城、黄石国家公园等',
        wx: 'lulutripna',
        img: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/na1.jpg',
        wechat: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/wechat_zhoushuo.png'
      },
      {
        nameCn: '钟永权',
        nameEn: 'Darren Zhong',
        customer: '在深圳，从业5年，服务过3000人，会普通话、粤语、英语',
        travel: '旧金山、洛杉矶、一号公路、纳帕谷、圣地亚哥、拉斯维加斯、盐湖城、黄石公园、羚羊彩穴等',
        wx: 'wqtc8309',
        img: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/na2.jpg',
        wechat: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/wechat_yongquan.png'
      },
      {
        nameCn: '吕嘉伟',
        nameEn: 'Ray Lv',
        customer: '在深圳，从业4年，服务过4000人，会普通话、粤语、英语',
        travel: '洛杉矶、旧金山、一号公路、拉斯维加斯、羚羊彩穴、优胜美地国家公园、东京、京都、富士山等',
        wx: 'wqtc8605',
        img: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/na3.jpg',
        wechat: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/wechat_lvjiawei.png'
      },
      {
        nameCn: '关敏婷',
        nameEn: 'Jess Kwan',
        customer: '在硅谷，从业3年，服务过3000人，会普通话、粤语、英语',
        travel: '优胜美地国家公园、洛杉矶、拉斯维加斯、夏威夷、西雅图、纽约、大峡谷国家公园、佛罗里达等',
        wx: 'lulutripna',
        img: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/na4.jpg',
        wechat: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/wechat_guanminting.png'
      },
      {
        nameCn: '程莉',
        nameEn: 'Nicole Cheng',
        customer: '在硅谷，从业6年，服务过7500人，会普通话、英文',
        travel: '洛杉矶、拉斯维加斯、夏威夷、西雅图、纽约、华盛顿、波士顿、黄石国家公园、佛罗里达等',
        wx: 'lulutripna',
        img: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/na5.jpg',
        wechat: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/wechat_chengli.png'
      }
    ],
    eu: [
      // {
      //   nameCn: '郭玉冰',
      //   nameEn: 'Aaron Guo',
      //   customer: '在深圳，从业3年，服务过1000人，会普通话、英语',
      //   travel: '伯明翰（英国）、伦敦、康沃尔、爱丁堡、苏格兰高地、北爱尔兰、冰岛、巴黎、尼斯、摩纳哥等',
      //   wx: 'wqtc8027',
      //   img: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/eu2.jpg',
      //   wechat: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/wechat_guoyubin.png'
      // },
      {
        nameCn: '卢腾',
        nameEn: 'Dasiy Lu',
        customer: '在深圳，从业3年，服务过1000人，会普通话、英语',
        travel: '罗马、佛罗伦萨、威尼斯、米兰、少女峰、苏黎世、琉森、巴黎、梵蒂冈等',
        wx: 'woqulvxing-henrylee',
        img: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/eu3.jpg',
        wechat: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/wechat_luteng.png'
      },
      {
        nameCn: '吴翠华',
        nameEn: 'Mandy Wu',
        customer: '在伦敦，从业5年，服务过2000人，会普通话、粤语、英语',
        travel: '迪拜，西班牙，荷兰，英国湖区，苏格兰，摩纳哥，梵蒂冈，捷克，德国， 意大利等',
        wx: 'lulutripeu',
        img: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/eu4.jpg',
        wechat: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/wechat_wucuihua.png'
      }
    ]
  }
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};

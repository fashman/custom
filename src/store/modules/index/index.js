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
        from: '中国山东',
        live: '中国深圳',
        language: '普通话、英语',
        customer: '服务过约3000人',
        travel: '奥克兰、基督城、皇后镇、但尼丁、库克山、蒂卡波、米尔福德峡湾、奥马鲁',
        wx: 'wqtc8319',
        img: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/au1.jpg',
        wechat: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/wechat_jiameiyu.png'
      },
      {
        nameCn: '刘伟',
        nameEn: 'Louis',
        from: '中国湖南',
        live: '中国深圳',
        language: '普通话、英语',
        customer: '服务过约3000人',
        travel: '奥克兰、基督城、皇后镇、库克山、蒂卡波、米尔福德峡湾、奥马鲁、墨尔本大洋路、悉尼、黄金海岸',
        wx: 'wqtc8603',
        img: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/au2.jpg',
        wechat: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/wechat_liuwei.png'
      },
      {
        nameCn: '叶馨咛',
        nameEn: 'Anita Ye',
        from: '中国重庆',
        live: '新西兰奥克兰',
        language: '普通话、英文、四川话',
        customer: '服务过约2000人',
        travel: '皇后镇、基督城、福克斯冰川、罗托鲁瓦、凯库拉、悉尼、墨尔本大洋路、黄金海岸、凯恩斯大堡礁、斐济南迪及外岛',
        wx: 'LULUTRIP-ANZ',
        img: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/au3.jpg',
        wechat: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/wechat_yexinning.png'
      },
    ],
    na: [
      {
        nameCn: '周硕',
        nameEn: 'Aries Zhou',
        from: '中国上海',
        live: '美国旧金山',
        language: '普通话、上海话、英文',
        customer: '服务过约5000人',
        travel: '旧金山、洛杉矶、拉斯维加斯大峡谷、纽约、华盛顿、波士顿、盐湖城、黄石国家公园、优胜美地国家公园、羚羊彩穴、尼亚加拉大瀑布',
        wx: 'lulutripna',
        img: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/na1.jpg',
        wechat: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/wechat_zhoushuo.png'
      },
      {
        nameCn: '钟永权',
        nameEn: 'Darren Zhong',
        from: '中国广东',
        live: '中国深圳',
        language: '普通话、英文、广东话',
        customer: '服务过约3000人',
        travel: '旧金山、洛杉矶、一号公路、纳帕谷、圣地亚哥、拉斯维加斯、盐湖城、黄石公园、羚羊彩穴、大峡谷国家公园',
        wx: 'wqtc8309',
        img: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/na2.jpg',
        wechat: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/wechat_yongquan.png'
      },
      {
        nameCn: '吕嘉伟',
        nameEn: 'Ray Lv',
        from: '中国重庆',
        live: '中国深圳',
        language: '普通话、英语、粤语',
        customer: '服务过约4000人',
        travel: '洛杉矶、旧金山、一号公路、拉斯维加斯、羚羊彩穴、优胜美地国家公园、东京、京都、大阪、富士山',
        wx: 'wqtc8605',
        img: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/na3.jpg',
        wechat: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/wechat_lvjiawei.png'
      },
      {
        nameCn: '关敏婷',
        nameEn: 'Jess Kwan',
        from: '香港',
        live: '美国硅谷',
        language: '普通话、英文、广东话',
        customer: '服务过约3000人',
        travel: '优胜美地国家公园、洛杉矶、拉斯维加斯、夏威夷、西雅图、纽约、大峡谷国家公园、佛罗里达、温哥华、落基山',
        wx: 'lulutripna',
        img: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/na4.jpg',
        wechat: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/wechat_guanminting.png'
      },
      {
        nameCn: '程莉',
        nameEn: 'Nicole Cheng',
        from: '中国辽宁',
        live: '美国硅谷',
        language: '普通话、英语',
        customer: '服务过约7500人',
        travel: '洛杉矶、拉斯维加斯、夏威夷、西雅图、纽约、华盛顿、波士顿、黄石国家公园、佛罗里达、温哥华、落基山',
        wx: 'lulutripna',
        img: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/na5.jpg',
        wechat: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/wechat_chengli.png'
      }
    ],
    eu: [
      // {
      //   nameCn: '江莉莉',
      //   nameEn: 'Lili Jiang',
      //   from: '中国湖南',
      //   live: '中国深圳',
      //   language: '普通话、英语、日语',
      //   customer: '服务过约3000人',
      //   travel: '巴黎、维也纳、哈尔施塔特、捷克克鲁姆洛夫、布拉格、伦敦、剑桥、苏格兰高地、曼彻斯特',
      //   wx: 'wqtc8210',
      //   img: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/eu1.jpg',
      //   wechat: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/wechat_jianglili.png'
      // },
      {
        nameCn: '郭玉冰',
        nameEn: 'Aaron Guo',
        from: '中国武汉',
        live: '中国深圳',
        language: '普通话、英语',
        customer: '服务过约1000人',
        travel: '伯明翰（英国）、伦敦、康沃尔、爱丁堡、苏格兰高地、北爱尔兰、冰岛、巴黎、尼斯、摩纳哥',
        wx: 'wqtc8027',
        img: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/eu2.jpg',
        wechat: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/wechat_guoyubin.png'
      },
      {
        nameCn: '卢腾',
        nameEn: 'Dasiy Lu',
        from: '中国湖南',
        live: '中国深圳',
        language: '普通话、英文',
        customer: '服务过约1000人',
        travel: '罗马、佛罗伦萨、威尼斯、米兰、少女峰、苏黎世、琉森、巴黎、梵蒂冈',
        wx: 'woqulvxing-henrylee',
        img: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/eu3.jpg',
        wechat: '//h5.quimg.com/h5-custom-static/dist/images/index/customer/wechat_luteng.png'
      },
      {
        nameCn: '吴翠华',
        nameEn: 'Mandy Wu',
        from: '中国广东',
        live: '英国伦敦',
        language: '粤语、普通话、英语',
        customer: '服务过约2000人',
        travel: '迪拜，西班牙，荷兰，英国湖区，苏格兰，摩纳哥，梵蒂冈，捷克，德国， 意大利',
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

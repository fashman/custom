export default {
  getScrollTop: () => {
    let scrollTop = 0;
    let bodyScrollTop = 0;
    let documentScrollTop = 0;

    if (document.body) {
      bodyScrollTop = document.body.scrollTop;
    }

    if (document.documentElement) {
      documentScrollTop = document.documentElement.scrollTop;
    }

    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    
    return scrollTop;
  },
  getWindowHeight: () => {
    let windowHeight = 0;

    if (document.compatMode == 'CSS1Compat') {
      windowHeight = document.documentElement.clientHeight;
    } else {
      windowHeight = document.body.clientHeight;
    }

    return windowHeight;
  },
  getScrollHeight: () => {
    let scrollHeight = 0;
    let bodyScrollHeight = 0;
    let documentScrollHeight = 0;

    if (document.body) {
      bodyScrollHeight = document.body.scrollHeight;
    }

    if (document.documentElement) {
      documentScrollHeight = document.documentElement.scrollHeight;
    }

    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    
    return scrollHeight;
  },
  customType: ['定制游', '私人定制', '高端定制', '自驾定制'],
  formatUrlOptions: (params) => {
    let o = {};
    const list = params ? params.split('--') : [];
    console.log(list, params);
    list.forEach(val => {
      const index = val.indexOf('-');
      const key = val.substring(0, index);
      const value = val.substring(index + 1,);
      o[key] = value;
    });
    return o;
  },
  getUrl: ( select, facetFieldsFake ) => {
    const {
      continent = [], country = [], area = [], city = [],
      duration = [], start_location = [], end_location = [],
      interest_topic_tag = [], suitable_crowd_tag = [],
      search_price = [0, 0],
      keyword = ''
    } = select;
    let arr = [], k = '';
    continent.length && arr.push(`ct-${continent[0]}`);
    country.length && arr.push(`ic-${country.join('-')}`);
    area.length && arr.push(`at-${area.join('-')}`);
    city.length && arr.push(`ci-${city.join('-')}`);
    duration.length && arr.push(`d-${duration.join('-')}`);
    start_location.length && arr.push(`sl-${start_location.join('-')}`);
    end_location.length && arr.push(`el-${end_location.join('-')}`);
    interest_topic_tag.length && arr.push(`itt-${interest_topic_tag.join('-')}`);
    suitable_crowd_tag.length && arr.push(`sct-${suitable_crowd_tag.join('-')}`);
    // 价格特殊处理
    const price = facetFieldsFake.find(val => val.field === 'search_price').facetItems;
    // 价格筛选区间为：价格区间的最大最小值 或 [0, 0]时，当成用户未选择价格筛选，不计入URL规则
    const flag1 = price.length && price[0].score === search_price[0] && price[1].score === search_price[1];
    const flag2 = search_price[0] === 0 && search_price[1] === 0;
    if (!flag1 && !flag2) {
      arr.push(`p-${search_price.join('-')}`);
    }
    k = keyword ? `?keyword=${keyword}` : '';
    return `/custom/list${arr.length ? '/' + arr.join('--') : ''}${k}`;
  }
}
<template>
  <div class="performance">
    <h3 class="main-title">按预算选择玩法 价格透明又不贵</h3>
    <p class="performance-p performance-headline1">根据预算 灵活搭配个性组合</p>
    <p class="performance-p performance-headline2">快速报价 拒绝隐形消费</p>
    <div :class="[{float: float}, 'playing-method']">
      <div :class="[{pickItem: boxState[0]}, 'play-item air-item']">机票</div>
      <div :class="[{pickItem: boxState[1]}, 'play-item visa-item']">签证</div>
      <div :class="[{pickItem: boxState[2]}, 'play-item hotel-item']">酒店</div>
      <div :class="[{pickItem: boxState[3]}, 'play-item Characteristic-item']">特色<br>服务</div>
      <div :class="[{pickItem: boxState[4]}, 'play-item bus-item']">包车</div>
      <div :class="[{pickItem: boxState[5]}, 'play-item Airport-item']">接送机</div>
      <div :class="[{pickItem: boxState[6]}, 'play-item car-item']">租车</div>
      <div class="dot first-dot"></div>
      <div class="dot second-dot"></div>
      <div class="dot thirdly-dot"></div>
      <div class="dot fourth-dot"></div>
      <div :class="[{isShow: groupId === '014'}, 'group group-014']">
        <div class="line air-visa"></div>
        <div class="line air-bus"></div>
        <div class="line visa-bus"></div>
      </div>
      <div :class="[{isShow: groupId === '012'}, 'group group-012']">
        <div class="line air-visa"></div>
        <div class="line air-hotel"></div>
        <div class="line visa-hotel"></div>
      </div>
      <div :class="[{isShow: groupId === '245'}, 'group group-014']">
        <div class="line hotel-bus"></div>
        <div class="line hotel-Airport"></div>
        <div class="line bus-Airport"></div>
      </div>
      <div :class="[{isShow: groupId === '234'}, 'group group-234']">
        <div class="line hotel-bus"></div>
        <div class="line hotel-characteristic"></div>
        <div class="line characteristic-bus"></div>
      </div>
      <div :class="[{isShow: groupId === '346'}, 'group group-346']">
        <div class="line characteristic-bus"></div>
        <div class="line characteristic-car"></div>
        <div class="line bus-car"></div>
      </div>
      <div :class="[{isShow: groupId === '456'}, 'group group-456']">
        <div class="line bus-Airport"></div>
        <div class="line Airport-car"></div>
        <div class="line bus-car"></div>
      </div>
      <div :class="[{isShow: groupId === '024'}, 'group group-024']">
        <div class="line air-hotel"></div>
        <div class="line air-bus"></div>
        <div class="line hotel-bus"></div>
      </div>
      <div :class="[{isShow: groupId === '025'}, 'group group-025']">
        <div class="line air-hotel"></div>
        <div class="line air-Airport"></div>
        <div class="line hotel-Airport"></div>
      </div>
      <div :class="[{isShow: groupId === '045'}, 'group group-045']">
        <div class="line air-Airport"></div>
        <div class="line air-bus"></div>
        <div class="line bus-Airport"></div>
      </div>
      <div :class="[{isShow: groupId === '345'}, 'group group-345']">
        <div class="line characteristic-bus"></div>
        <div class="line bus-Airport"></div>
        <div class="line characteristic-Airport"></div>
      </div>
      <div :class="[{isShow: groupId === '035'}, 'group group-035']">
        <div class="line air-characteristic"></div>
        <div class="line air-Airport"></div>
        <div class="line characteristic-Airport"></div>
      </div>
    </div>
    <a href="//m.woqu.com/custom/intention" class="custom-btn">
      <img src="@/images/brand/wechat-icon.png" alt="">
      <span>一对一定制服务</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Performance',
  data() {
    return {
      itemBox: [],
      float: false,
      ruleBox: [
        [0,1,4],
        [0,1,2],
        [2,4,5],
        [2,3,4],
        [3,4,6],
        [4,5,6],
        [0,2,4],
        [0,2,5],
        [0,4,5],
        [3,4,5],
        [0,3,5]
      ],
      groupId: ''
    }
  },
  methods: {
    randomNumber() {
      let _this = this;
      let random = Math.floor(Math.random()*11);
      let arrays = this.ruleBox[random];
      //let i = 0;
      // for(; i < 3; i++) {
      //   let random =  Math.floor(Math.random()*7);
      //   let unique = arrays.find(val => val == random);    //去重

      //   if (unique || unique === 0) {
      //     i--;
      //     continue;
      //   } else {
      //     arrays[i] = random;
      //   }
      // }
      this.float = false;
      this.itemBox = arrays;
      this.groupId = arrays.join('');

      setTimeout(function() {
        _this.itemBox = [];
        _this.float = true;
        _this.groupId = '';
      }, 1500);
    }
  },
  computed: {
    boxState: function() {
      let state = new Array(false,false,false,false,false,false,false);
      this.itemBox.forEach(val => {
        state[val] = true;
      });
      return state;
    }
  },
  mounted() {
    let _this = this;

    setInterval(function() {
      _this.randomNumber()
    }, 2500);

    // setTimeout(function() {
    //    _this.itemBox = [];
    // }, 1000);
  }
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
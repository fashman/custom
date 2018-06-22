<template>
  <div class="form">
    <div class="group">
      <div class="tit">
        <img class="air" src="./images/airplane.png" alt="">
        <h3>出行信息（选填）</h3>
      </div>
      <div class="input">
        <label>想去哪儿玩</label>
        <input type="text" v-model="formData.destinations" placeholder="请输入目的地"/>
      </div>
      <div class="input">
        <label>出行天数</label>
        <input type="number" v-model="formData.duration" placeholder="请输入天数"/>
      </div>
      <div class="input">
        <label>出行人数</label>
        <input type="number" v-model="formData.peopleNums" placeholder="请输入人数"/>
      </div>
      <div class="input">
        <label>定制要求</label>
        <input type="text" v-model="formData.customeDemand" placeholder="请输入定制要求"/>
      </div>
    </div>
    <div class="line"></div>
    <div class="group">
      <div class="tit">
        <img class="phone" src="./images/phone.png" alt="">
        <h3>联系方式（必填）</h3>
      </div>
      <div class="input">
        <label>联系人</label>
        <input type="text" v-model="formData.contactInfo.name" placeholder="请输入姓名"/>
      </div>
      <div class="input last">
        <div class="code">
          <span>
            + {{formData.contactInfo.countryCode}}
            {{(phoneTypeList.find((v,i)=>v.code === formData.contactInfo.countryCode)||{}).name||''}}
          </span>
          <img src="./images/down.png" alt="">
        </div>
        <select v-model="formData.contactInfo.countryCode">
          <option v-for="(item, index) in phoneTypeList" :key="index" :value="item.code">
            +{{item.code}} {{item.name}}
          </option>
        </select>
        <label>手机号</label>
        <input type="number" v-model="formData.contactInfo.mobile" placeholder="请输入电话"/>
      </div>
    </div>
    
  </div>
</template>

<script>
import { phoneTypeList } from '@/utils/phoneCheck';

export default {
  name: 'Form',
  data() {
    return {
      phoneTypeList,
    }
  },
  props: ['formData'],
}
</script>

<style scoped lang="less">
  @import './index.less';
</style>
webpackJsonp([0],{"0dUj":function(t,e){},"7f2X":function(t,e){},"HKp+":function(t,e){},IqSH:function(t,e){t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=236)}({0:function(t,e){t.exports=function(t,e,n,i,s){var r,a=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(r=t,a=t.default);var c,l="function"==typeof a?a.options:a;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),i&&(l._scopeId=i),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):n&&(c=n),c){var u=l.functional,d=u?l.render:l.beforeCreate;u?l.render=function(t,e){return c.call(e),d(t,e)}:l.beforeCreate=d?[].concat(d,c):[c]}return{esModule:r,exports:a,options:l}}},157:function(t,e,n){var i=n(0)(n(79),n(181),null,null,null);t.exports=i.exports},181:function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"mint-swipe-item"},[this._t("default")],2)},staticRenderFns:[]}},236:function(t,e,n){t.exports=n(43)},43:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),s=(n.n(i),n(157)),r=n.n(s);n.d(e,"default",function(){return r.a})},5:function(t,e){},79:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"mt-swipe-item",mounted:function(){this.$parent&&this.$parent.swipeItemCreated(this)},destroyed:function(){this.$parent&&this.$parent.swipeItemDestroyed(this)}}}})},RIID:function(t,e){},"T/Vv":function(t,e,n){"use strict";n("NYxO");var i={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}],staticClass:"error-box"},[i("div",{staticClass:"inbox"},[i("img",{attrs:{src:n("t2Z5"),alt:""}}),t._v(" "),i("h3",[t._v(t._s(t.text||"请填写正确的手机号"))]),t._v(" "),i("span",{on:{click:function(e){t.callback({key:"errorModal",value:{show:!1,text:""}})}}},[t._v("确定")])])])},staticRenderFns:[]};var s=n("VU/8")({name:"Error",props:["error","text","callback"]},i,!1,function(t){n("HKp+")},"data-v-13eafd5c",null);e.a=s.exports},aD0f:function(t,e,n){"use strict";var i={name:"SideBar",data:function(){return{show:!1}},props:["callback","groupId"],methods:{goTop:function(){this.callback?this.callback():(document.body.scrollTop=0,document.documentElement.scrollTop=0)},handleScroll:function(){document.body.scrollTop>100||document.documentElement.scrollTop>100?this.show=!0:this.show=!1},handleYsf:function(){if(ysf){var t=this.groupId,e=void 0===t?[]:t,n=e.length?e[0].replace(" ","_"):"";ysf.config({groupid:{North_America:"1052440",Oceania:"1043928",Europe:"1052439"}[n]||955150}),ysf.open({templateId:2484043})}}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidebar"},[e("span",{staticClass:"kefu",on:{click:this.handleYsf}}),this._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"gotop",on:{click:this.goTop}})])},staticRenderFns:[]};var r=n("VU/8")(i,s,!1,function(t){n("7f2X")},"data-v-3f3e5914",null);e.a=r.exports},gAYL:function(t,e,n){t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=235)}({0:function(t,e){t.exports=function(t,e,n,i,s){var r,a=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(r=t,a=t.default);var c,l="function"==typeof a?a.options:a;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),i&&(l._scopeId=i),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):n&&(c=n),c){var u=l.functional,d=u?l.render:l.beforeCreate;u?l.render=function(t,e){return c.call(e),d(t,e)}:l.beforeCreate=d?[].concat(d,c):[c]}return{esModule:r,exports:a,options:l}}},1:function(t,e){t.exports=n("7+uW")},158:function(t,e,n){var i=n(0)(n(80),n(168),function(t){n(99)},null,null);t.exports=i.exports},168:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mint-swipe"},[n("div",{ref:"wrap",staticClass:"mint-swipe-items-wrap"},[t._t("default")],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showIndicators,expression:"showIndicators"}],staticClass:"mint-swipe-indicators"},t._l(t.pages,function(e,i){return n("div",{staticClass:"mint-swipe-indicator",class:{"is-active":i===t.index}})}))])},staticRenderFns:[]}},2:function(t,e,n){"use strict";var i=n(1),s=n.n(i);n.d(e,"c",function(){return l}),e.a=function(t,e){if(!t)return;for(var n=t.className,i=(e||"").split(" "),s=0,r=i.length;s<r;s++){var a=i[s];a&&(t.classList?t.classList.add(a):u(t,a)||(n+=" "+a))}t.classList||(t.className=n)},e.b=function(t,e){if(!t||!e)return;for(var n=e.split(" "),i=" "+t.className+" ",s=0,r=n.length;s<r;s++){var o=n[s];o&&(t.classList?t.classList.remove(o):u(t,o)&&(i=i.replace(" "+o+" "," ")))}t.classList||(t.className=a(i))};var r=s.a.prototype.$isServer,a=(r||Number(document.documentMode),function(t){return(t||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")}),o=!r&&document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)},c=!r&&document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)},l=function(t,e,n){var i=function(){n&&n.apply(this,arguments),c(t,e,i)};o(t,e,i)};function u(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}},235:function(t,e,n){t.exports=n(44)},44:function(t,e,n){"use strict";var i=n(158),s=n.n(i);Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"default",function(){return s.a})},80:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2);e.default={name:"mt-swipe",created:function(){this.dragState={}},data:function(){return{ready:!1,dragging:!1,userScrolling:!1,animating:!1,index:0,pages:[],timer:null,reInitTimer:null,noDrag:!1,isDone:!1}},props:{speed:{type:Number,default:300},defaultIndex:{type:Number,default:0},auto:{type:Number,default:3e3},continuous:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},noDragWhenSingle:{type:Boolean,default:!0},prevent:{type:Boolean,default:!1},stopPropagation:{type:Boolean,default:!1}},watch:{index:function(t){this.$emit("change",t)}},methods:{swipeItemCreated:function(){var t=this;this.ready&&(clearTimeout(this.reInitTimer),this.reInitTimer=setTimeout(function(){t.reInitPages()},100))},swipeItemDestroyed:function(){var t=this;this.ready&&(clearTimeout(this.reInitTimer),this.reInitTimer=setTimeout(function(){t.reInitPages()},100))},rafTranslate:function(t,e,n,i,s){var r=.88;this.animating=!0;var a=e,o=0;(function e(){if(Math.abs(a-n)<.5)return this.animating=!1,a=n,t.style.webkitTransform="",s&&(s.style.webkitTransform=""),cancelAnimationFrame(o),void(i&&i());a=r*a+(1-r)*n,t.style.webkitTransform="translate3d("+a+"px, 0, 0)",s&&(s.style.webkitTransform="translate3d("+(a-n)+"px, 0, 0)"),o=requestAnimationFrame(e.bind(this))}).call(this)},translate:function(t,e,s,r){var a=arguments,o=this;if(s){this.animating=!0,t.style.webkitTransition="-webkit-transform "+s+"ms ease-in-out",setTimeout(function(){t.style.webkitTransform="translate3d("+e+"px, 0, 0)"},50);var c=!1,l=function(){c||(c=!0,o.animating=!1,t.style.webkitTransition="",t.style.webkitTransform="",r&&r.apply(o,a))};n.i(i.c)(t,"webkitTransitionEnd",l),setTimeout(l,s+100)}else t.style.webkitTransition="",t.style.webkitTransform="translate3d("+e+"px, 0, 0)"},reInitPages:function(){var t=this.$children;this.noDrag=1===t.length&&this.noDragWhenSingle;var e=[],s=Math.floor(this.defaultIndex),r=s>=0&&s<t.length?s:0;this.index=r,t.forEach(function(t,s){e.push(t.$el),n.i(i.b)(t.$el,"is-active"),s===r&&n.i(i.a)(t.$el,"is-active")}),this.pages=e},doAnimate:function(t,e){var s=this;if(0!==this.$children.length&&(e||!(this.$children.length<2))){var r,a,o,c,l,u,d,f=this.speed||300,h=this.index,p=this.pages,v=p.length;e?(r=e.prevPage,o=e.currentPage,a=e.nextPage,c=e.pageWidth,l=e.offsetLeft,u=e.speedX):(c=this.$el.clientWidth,o=p[h],r=p[h-1],a=p[h+1],this.continuous&&p.length>1&&(r||(r=p[p.length-1]),a||(a=p[0])),r&&(r.style.display="block",this.translate(r,-c)),a&&(a.style.display="block",this.translate(a,c)));var m=this.$children[h].$el;"prev"===t?(h>0&&(d=h-1),this.continuous&&0===h&&(d=v-1)):"next"===t&&(h<v-1&&(d=h+1),this.continuous&&h===v-1&&(d=0));var g=function(){if(void 0!==d){var t=s.$children[d].$el;n.i(i.b)(m,"is-active"),n.i(i.a)(t,"is-active"),s.index=d}s.isDone&&s.end(),r&&(r.style.display=""),a&&(a.style.display="")};setTimeout(function(){"next"===t?(s.isDone=!0,s.before(o),u?s.rafTranslate(o,l,-c,g,a):(s.translate(o,-c,f,g),a&&s.translate(a,0,f))):"prev"===t?(s.isDone=!0,s.before(o),u?s.rafTranslate(o,l,c,g,r):(s.translate(o,c,f,g),r&&s.translate(r,0,f))):(s.isDone=!1,s.translate(o,0,f,g),void 0!==l?(r&&l>0&&s.translate(r,-1*c,f),a&&l<0&&s.translate(a,c,f)):(r&&s.translate(r,-1*c,f),a&&s.translate(a,c,f)))},10)}},next:function(){this.doAnimate("next")},prev:function(){this.doAnimate("prev")},before:function(){this.$emit("before",this.index)},end:function(){this.$emit("end",this.index)},doOnTouchStart:function(t){if(!this.noDrag){var e=this.$el,n=this.dragState,i=t.touches[0];n.startTime=new Date,n.startLeft=i.pageX,n.startTop=i.pageY,n.startTopAbsolute=i.clientY,n.pageWidth=e.offsetWidth,n.pageHeight=e.offsetHeight;var s=this.$children[this.index-1],r=this.$children[this.index],a=this.$children[this.index+1];this.continuous&&this.pages.length>1&&(s||(s=this.$children[this.$children.length-1]),a||(a=this.$children[0])),n.prevPage=s?s.$el:null,n.dragPage=r?r.$el:null,n.nextPage=a?a.$el:null,n.prevPage&&(n.prevPage.style.display="block"),n.nextPage&&(n.nextPage.style.display="block")}},doOnTouchMove:function(t){if(!this.noDrag){var e=this.dragState,n=t.touches[0];e.speedX=n.pageX-e.currentLeft,e.currentLeft=n.pageX,e.currentTop=n.pageY,e.currentTopAbsolute=n.clientY;var i=e.currentLeft-e.startLeft,s=e.currentTopAbsolute-e.startTopAbsolute,r=Math.abs(i),a=Math.abs(s);if(r<5||r>=5&&a>=1.73*r)this.userScrolling=!0;else{this.userScrolling=!1,t.preventDefault();var o=(i=Math.min(Math.max(1-e.pageWidth,i),e.pageWidth-1))<0?"next":"prev";e.prevPage&&"prev"===o&&this.translate(e.prevPage,i-e.pageWidth),this.translate(e.dragPage,i),e.nextPage&&"next"===o&&this.translate(e.nextPage,i+e.pageWidth)}}},doOnTouchEnd:function(){if(!this.noDrag){var t=this.dragState,e=new Date-t.startTime,n=null,i=t.currentLeft-t.startLeft,s=t.currentTop-t.startTop,r=t.pageWidth,a=this.index,o=this.pages.length;if(e<300){var c=Math.abs(i)<5&&Math.abs(s)<5;(isNaN(i)||isNaN(s))&&(c=!0),c&&this.$children[this.index].$emit("tap")}e<300&&void 0===t.currentLeft||((e<300||Math.abs(i)>r/2)&&(n=i<0?"next":"prev"),this.continuous||(0===a&&"prev"===n||a===o-1&&"next"===n)&&(n=null),this.$children.length<2&&(n=null),this.doAnimate(n,{offsetLeft:i,pageWidth:t.pageWidth,prevPage:t.prevPage,currentPage:t.dragPage,nextPage:t.nextPage,speedX:t.speedX}),this.dragState={})}},initTimer:function(){var t=this;this.auto>0&&!this.timer&&(this.timer=setInterval(function(){if(!t.continuous&&t.index>=t.pages.length-1)return t.clearTimer();t.dragging||t.animating||t.next()},this.auto))},clearTimer:function(){clearInterval(this.timer),this.timer=null}},destroyed:function(){this.timer&&this.clearTimer(),this.reInitTimer&&(clearTimeout(this.reInitTimer),this.reInitTimer=null)},mounted:function(){var t=this;this.ready=!0,this.initTimer(),this.reInitPages();var e=this.$el;e.addEventListener("touchstart",function(e){t.prevent&&e.preventDefault(),t.stopPropagation&&e.stopPropagation(),t.animating||(t.dragging=!0,t.userScrolling=!1,t.doOnTouchStart(e))}),e.addEventListener("touchmove",function(e){t.dragging&&(t.timer&&t.clearTimer(),t.doOnTouchMove(e))}),e.addEventListener("touchend",function(e){if(t.userScrolling)return t.dragging=!1,void(t.dragState={});t.dragging&&(t.initTimer(),t.doOnTouchEnd(e),t.dragging=!1)})}}},99:function(t,e){}})},gxna:function(t,e){},jFLA:function(t,e,n){"use strict";var i=n("mtWM"),s=n.n(i),r={name:"User",data:function(){return{isShow:!1,hideClass:!1,userInfo:null}},created:function(){var t=this;s()({url:"//m.woqu.com/member/check-is-login"}).then(function(e){var n=e.data;1===n.rs&&(t.userInfo=n.data)})},methods:{show:function(){this.isShow=!0},hide:function(){var t=this;this.hideClass=!0,setTimeout(function(){t.isShow=!1,t.hideClass=!1},500)},reloadUrl:function(t){location.href=t+"?target="+location.href}},mounted:function(){this.$refs.userRef.addEventListener("touchmove",function(t){t.preventDefault()})}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-box"},[n("div",{staticClass:"user-icon",on:{click:t.show}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],ref:"userRef",staticClass:"user"},[n("div",{class:{info:!0,show:t.isShow,hide:t.hideClass}},[t.userInfo?n("div",{staticClass:"yours"},[n("h3",[t._v("Hi，"+t._s(t.userInfo))]),t._v(" "),t._m(0),t._v(" "),n("p",[n("span",{on:{click:function(e){t.reloadUrl("//m.woqu.com/member/logout")}}},[t._v("退出")])])]):n("div",{staticClass:"yours"},[n("h3",[n("span",{on:{click:function(e){t.reloadUrl("//m.woqu.com/account/password-login")}}},[t._v("点击登录")])]),t._v(" "),t._m(1),t._v(" "),n("p",[n("span",{on:{click:function(e){t.reloadUrl("//m.woqu.com/account/dynamic-login")}}},[t._v("注册")])])]),t._v(" "),n("div",{staticClass:"line"}),t._v(" "),t._m(2),t._v(" "),t._m(3)]),t._v(" "),n("div",{staticClass:"cover",on:{click:t.hide}})])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"//m.woqu.com/order-list-app"}},[this._v("我的订单")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"//m.woqu.com/account/dynamic-login?target=http%3A%2F%2Fm.woqu.com%2Forder-list-app"}},[this._v("我的订单")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"links"},[e("p",[e("a",{attrs:{href:"/home/index"}},[this._v("首页")])]),this._v(" "),e("p",[e("a",{attrs:{href:"/custom/intention"}},[this._v("定制")])]),this._v(" "),e("p",[e("a",{attrs:{href:"/custom/list"}},[this._v("线路")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tel"},[e("p",[this._v("中国本地：400-661-5757")]),this._v(" "),e("p",[this._v("国际通用：86-755-3667-7780")])])}]};var o=n("VU/8")(r,a,!1,function(t){n("RIID")},"data-v-2a141008",null);e.a=o.exports},qERK:function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:this.loading,expression:"loading"}],ref:"loadingModal",staticClass:"loading"},[this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading-box"},[e("div",{staticClass:"loading-border"}),this._v(" "),e("div",{staticClass:"loading-img"})])}]};var s=n("VU/8")({name:"Loading",props:["loading"],mounted:function(){this.$refs.loadingModal.addEventListener("touchmove",function(t){t.preventDefault()})}},i,!1,function(t){n("gxna")},"data-v-c7990f92",null);e.a=s.exports},swY8:function(t,e){},t2Z5:function(t,e,n){t.exports=n.p+"images/error.ef4fd19.png"}});
//# sourceMappingURL=0.js.map
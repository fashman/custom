## 目录结构

```
.
├── dist                                    // 打包输出目录
│   ├── css                                 // 打包输出样式文件
│   │   ├── style.css
│   │   └── style.css.map
│   ├── images                              // 打包输出图片文件
│   │   └── logo.82b9c7a.png
│   ├── index.html                          // 打包输出 html 文件
│   └── js                                  // 打包输出脚本文件
│       ├── app.js
│       ├── app.js.map
│       ├── manifest.js
│       ├── manifest.js.map
│       ├── vendor.js
│       └── vendor.js.map
├── index.html                              // html 模板
├── src                                     // 源代码
│   ├── App.vue
│   ├── api                                 // API 接口
│   │   └── index.js
│   ├── components                          // 通用组件
│   │   └── HelloWorld.vue
│   ├── images                              // 通用图片
│   │   └── logo.png
│   ├── main.js                             // 入口文件
│   ├── pages                               // 页面
│   │   ├── detail
│   │   ├── index
│   │   │   ├── components
│   │   │   ├── index.less
│   │   │   └── index.vue
│   │   └── list
│   ├── router                              // 路由
│   │   └── index.js
│   └── store                               // 应用状态相关(vuex)
│       ├── index.js
│       └── modules
│           ├── detail
│           │   ├── actions.js
│           │   ├── getters.js
│           │   ├── index.js
│           │   └── mutations.js
│           ├── index
│           │   ├── actions.js
│           │   ├── getters.js
│           │   ├── index.js
│           │   └── mutations.js
│           └── list                        // 列表页
│               ├── actions.js              // 异步处理，最终状态更改通过 mutations
│               ├── getters.js              // state 派生状态处理
│               ├── mutations.js            // 更改 state    
│               └── index.js
├── webpack.base.conf.js                    // webpack 基础配置
├── webpack.dev.conf.js                     // webpack 开发配置
└── webpack.prod.conf.js                    // webpack 生产配置
```
## 相关链接

> [vue-loader相关配置](https://vue-loader.vuejs.org/zh-cn/)

> [webpack相关配置](https://doc.webpack-china.org/configuration/#-)

## 关于适配

> **viewport 相关**

> [amfe-flexible](https://github.com/amfe/lib-flexible);

> [如何在Vue项目中使用vw实现移动端适配](https://www.w3cplus.com/mobile/vw-layout-in-vue.html)；

```javascript

  "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {}, 
    "postcss-write-svg": {
        utf8: false
    },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
        viewportWidth: 750,      // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
        //viewportHeight: 1334,  // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
        unitPrecision: 3,        // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
        viewportUnit: 'vw',      // 指定需要转换成的视窗单位，建议使用vw
        selectorBlackList: [],   // 指定不转换为视窗单位的类，可以自定义，可以无限添加
        minPixelValue: 1,        // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
        mediaQuery: false        // 允许在媒体查询中转换`px`
    }, 
    "postcss-viewport-units":{},
    "cssnano": {
        preset: "advanced",
        autoprefixer: false,
        "postcss-zindex": false
    }

```

## 构建流程

#### 安装依赖

``` bash
$ yarn install
```

#### 本地调试

``` bash
$ npm start
```

#### 生产构建

```bash
$ npm run build
```

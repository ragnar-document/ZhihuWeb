# 知乎网站

### Project setup
```
npm install
```
### 如果没有基础
可以看看入门https://github.com/ragnar-document/Web-QuickStart

### 项目说明

数据来自知乎API真实数据，因为知乎后端需要携带登陆信息等原因不能直接使用，我在yapi中建立了几个相关页面的apimock数据来进行操作，如有侵权联系删除[@Ragnar](1535354822@qq.com)。项目比较容易适合刚入门vue,托管在github的预览页面无法加载mock数据这个问题还未得到解决

### 部分页面展示

![](https://github.com/ragnar-document/ZhihuWeb/blob/master/show/home.png?raw=true)

![](https://github.com/ragnar-document/ZhihuWeb/blob/master/show/zhuanlan.png?raw=true)

页面并非真实设计稿数据目测大小多少存在偏差，并且对布局进行适当的调整

### 组件

因为页面比较简单且重复的能在使用的内容比较多所以需要将常用组件抽离出来使用

```
_zh-layout.vue //公共布局
_zh-header.vue	//页面头部
_zh-asider.vue	//页面侧栏
_zh-loading.vue	//内容加载完前的占位页面
_zh-tag.vue		//标签
_zh-introCard.vue	//信息卡片
_zh-userCard.vue	//用户卡片
```

### 配置跨域/vue.config.js

之前尝试使用知乎api进行操作但是发现请求返回402，我想应该是知乎的后端对权限做了设置图片并没有设置防盗链但是还是会出现偶尔请求失败的问题

```javascript
devServer: {
    proxy: {
      "/api": {
        target: "http://yapi.weilaigongzuo.com",
        ws: true,
        changeOrigin: true
      }
    }
  },
```

### Axios

```javascript
import axios from "axios";

axios.interceptors.response.use(
  res => {
    return res.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default {
  post: function(url = "", data = {}, config) {
    return axios.post(url, data, config);
  },

  put: function(url = "", data = {}, config) {
    return axios.put(url, data, config);
  },

  get: function(url, params = {}, config) {
    let OPTIONS = Object.assign({ params }, config);
    return axios.get(url, OPTIONS);
  },

  delete: function(url = "", params = {}, config) {
    let OPTIONS = Object.assign({ params }, config);
    return axios.delete(url, OPTIONS);
  }
};

```

### API/请注意请求次数

成功返回data

```javascript
const API = "http://yapi.weilaigongzuo.com/mock/441";
export default {
  recommend: `${API}/zhihu/recommend`,
  select: `${API}/zhihu/hot-select`,
  hostList: `${API}/zhihu/hot-list`,
  hostListItem: name => `${API}/zhihu/hot-lists/${name}`,
  newsSpecialsList: `${API}/zhihu/news_specials/list`,
  zhuanlanCard: `${API}/zhihu/zhuanlan-card`
};
```

### 导航栏效果

知乎导航栏上下翻滚使用绑定class进行三元表达添加is-show 如果真不添加属性如果false添加is-show同时向上移动

### 项目结束

每次写项目无论大小都好都喜欢记录一下，如果对你有所帮助请鼓励一下点个star～～

See [Configuration Reference](https://cli.vuejs.org/config/).

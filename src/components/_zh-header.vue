<template>
  <div
    class="zh-home-header"
    :class="[isActive ? 'zh-home-header' : 'zh-home-header isFiexd']"
  >
    <div
      :class="[
        isActive
          ? 'zh-home-header-container'
          : 'zh-home-header-container isShow'
      ]"
    >
      <div class="zh-header-img">
        <svg
          viewBox="0 0 200 91"
          class="Icon ZhihuLogo ZhihuLogo--blue Icon--logo"
          width="64"
          height="30"
          aria-hidden="true"
          style="height: 30px; width: 64px;"
        >
          <title />
          <g>
            <path
              d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z"
              fill-rule="evenodd"
            />
          </g>
        </svg>
      </div>
      <div class="zh-header-nav">
        <router-link
          v-for="item in navlist"
          :key="item.title"
          :to="{ name: item.name }"
          >{{ item.title }}</router-link
        >
        <router-link :to="{ name: 'Zhuanlan' }">专栏</router-link>
      </div>
      <div class="zh-header-select">
        <el-autocomplete
          popper-class="my-autocomplete"
          v-model="selectValue"
          :fetch-suggestions="querySearch"
          :placeholder="placeholder"
          @focus="zhSelect"
          :class="[hiddenBtn ? 'zh-header-select-input' : '']"
          @blur="zhSelect"
          @select="handleSelect"
        >
          <i
            class="el-icon-edit el-input__icon"
            slot="suffix"
            @click="handleIconClick"
          ></i>
          <template slot-scope="{ item }">
            <div class="name">{{ item.query }}</div>
            <span class="addr">{{ item.display_query }}</span>
          </template>
        </el-autocomplete>
        <ElButton type="primary" v-show="!hiddenBtn" v-model="selectValue"
          >搜索</ElButton
        >
      </div>
    </div>
    <div
      :class="[
        isActive
          ? 'zh-home-header-hide-container'
          : 'zh-home-header-hide-container isShow'
      ]"
    >
      <div class="zh-header-hide-img">
        <svg
          viewBox="0 0 200 91"
          class="Icon ZhihuLogo ZhihuLogo--blue Icon--logo"
          width="64"
          height="30"
          aria-hidden="true"
          style="height: 30px; width: 64px;"
        >
          <title />
          <g>
            <path
              d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z"
              fill-rule="evenodd"
            />
          </g>
        </svg>
      </div>
      <div class="zh-header-hide-writer">
        <el-button type="primary" size="mini" @click="writerArticle"
          >写文章</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import Serve from "./../global/request";
import Router from "./../routes/router";
export default {
  data() {
    return {
      hiddenBtn: false,
      selectData: [],
      navlist: [],
      selectValue: "",
      placeholder: "",
      headerHeight: 52,
      scrollHeight: 0,
      isActive: true
    };
  },
  created() {
    this.render();
    this.navlist = Router[0].children;
  },
  mounted() {
    window.addEventListener("scroll", this.getScroll);
  },
  methods: {
    render() {
      Serve.select().then(res => {
        let selectData = res.top_search.words;
        this.selectData = selectData;
        let index = Math.floor(Math.random() * selectData.length);
        let placeholder = selectData[index].display_query;
        this.placeholder = placeholder;
        this.selectData = this.loadAll();
      });
    },
    zhSelect() {
      this.hiddenBtn = this.hiddenBtn ? false : true;
    },
    querySearch(queryString, cb) {
      var selectData = this.selectData;
      var results = queryString
        ? selectData.filter(this.createFilter(queryString))
        : selectData;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return this.selectData;
    },
    handleSelect(item) {
      console.log(item);
    },
    handleIconClick(ev) {
      console.log(ev);
    },
    //监听滚动
    getScroll() {
      if (document.documentElement.scrollTop >= 52) {
        this.isActive = false;
      } else {
        this.isActive = true;
      }
    },
    writerArticle() {}
  },
  components: {}
};
</script>

<style lang="less">
.zh-home-header {
  height: 52px;
  width: 100%;
  overflow: hidden;
  z-index: 99999;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  -webkit-box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  .zh-home-header-container {
    display: flex;
    align-items: center;
    height: 52px;
    width: 1000px;
    margin: 0 auto;
    transition: all 0.5s;
    .zh-header-img .ZhihuLogo {
      height: 40px;
      width: 64px;
      fill: #0084ff;
    }
    .zh-header-nav {
      flex: 1;
      padding-left: 40px;
      a {
        text-decoration: none;
        font-size: 16px;
        color: #666;
        margin: 0 16px;
        padding-bottom: 12px;
        &.router-link-exact-active {
          color: #0084ff;
          border-bottom: 3px solid #0084ff;
        }
      }
    }
    .zh-header-select {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 370px;
      .zh-header-select-input input {
        width: 370px;
        height: 30px;
        background-color: #eee;
        transition: all 1s;
      }
      input {
        width: 310px;
        height: 30px;
        background-color: #f6f6f6;
        transition: all 0.8s;
      }
      button {
        height: 30px;
        width: 60px;
        text-align: center;
        line-height: 30px;
        padding: 0;
        margin-left: 10px;
        background-color: #0084ff;
      }
    }
  }
  .zh-home-header-hide-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 52px;
    width: 1000px;
    margin: 0 auto;
    transition: all 0.5s;
    .zh-header-hide-img .ZhihuLogo {
      height: 40px;
      width: 64px;
      fill: #0084ff;
    }
    .zh-header-hide-writer {
      button {
        background-color: #0084ff;
      }
    }
  }
}
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;
    .hot {
      border-bottom: #b4b4b4;
      line-height: 40px;
    }
    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}
.isShow {
  width: 100%;
  transform: translateY(-100%);
}
.isFiexd {
  position: fixed;
  width: 100%;
}
</style>

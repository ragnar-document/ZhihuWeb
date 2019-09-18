<template>
  <div class="zh-specials-page">
    <el-container>
      <el-main class="zh-specials-main">
        <div class="zh-main-tabs">
          <router-link to="/">推荐</router-link>
          <router-link to="/">热榜</router-link>
        </div>
        <div class="zh-specials-hotlist">
          <el-button
            v-for="item in specialsbtnlist"
            :key="item.name"
            :data-name="item.identifier"
            @click="childNavBtn"
            round
            >{{ item.name }}</el-button
          >
        </div>
        <zh-loading v-show="loading" />
        <div class="zh-main-list">
          <div
            class="zh-articles-item"
            v-for="(item, index) in specialsData"
            :key="index"
          >
            <div class="zh-articles-container">
              <div class="zh-articles-content">
                <div class="zh-hot-number">{{ index + 1 }}</div>
                <h3 class="zh-articles-title">{{ item.target.title }}</h3>
                <div class="zh-articles-hot">{{ item.detail_text }}</div>
              </div>
              <div
                class="zh-articles-cover"
                v-for="i in item.children"
                :key="i.id"
              >
                <img :src="i.thumbnail" />
              </div>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Serve from "./../global/request";
import loading from "../components/_zh-loading";
export default {
  data() {
    return {
      specialsbtnlist: [],
      specialsData: [],
      loading: true
    };
  },
  created() {
    this.render();
  },
  methods: {
    render() {
      Serve.hostlist().then(res => {
        this.specialsbtnlist = res.data;
      });
      let params = "total";
      Serve.hostLists(params).then(res => {
        this.specialsData = res.data;
        this.loading = false;
        console.log(res.data);
      });
    },
    childNavBtn(e) {
      let params = e.currentTarget.dataset.name;
      Serve.hostLists(params).then(res => {
        this.specialsData = res.data;
      });
    }
  },
  components: {
    "zh-loading": loading
  }
};
</script>

<style lang="less">
.zh-specials-page {
  .zh-specials-main {
    background-color: #fff;
    margin-right: 14px;
    padding: 0;
    .zh-main-tabs {
      position: relative;
      height: 60px;
      line-height: 60px;
      padding-left: 20px;
      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        width: 100%;
        height: 1px;
        background-color: #eee;
      }
      a {
        color: #666;
        text-decoration: none;
        padding: 0 16px;
        &.router-link-exact-active {
          color: #0084ff;
        }
      }
    }
    .zh-specials-hotlist {
      position: relative;
      line-height: 60px;
      padding: 0 20px;
      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        height: 1px;
        width: 100%;
        background-color: #eee;
      }
      button {
        height: 30px;
        padding: 0 18px;
        line-height: 30px;
      }
    }
    .zh-main-list {
      .zh-articles-item {
        padding: 20px 40px;
        border-bottom: 1px solid #eee;
        .zh-articles-title {
          margin-bottom: 14px;
        }
        .zh-articles-hot {
          position: absolute;
          bottom: 0;
          color: #999;
          font-size: 14px;
          &::before {
            display: inline-block;
            content: "";
            background: url("~@/assets/hot.png") no-repeat;
            background-size: 100%;
            height: 18px;
            width: 18px;
            vertical-align: text-top;
            margin-right: 5px;
          }
        }
        .zh-articles-container {
          display: flex;
          .zh-articles-cover {
            float: right;
            margin-right: 14px;
            img {
              height: 105px;
              width: 190px;
              background-color: #eee;
              border-radius: 10px;
            }
          }
          .zh-articles-content {
            position: relative;
            flex: 1;
            padding: 0 14px;

            .zh-hot-number {
              position: absolute;
              left: -16px;
              top: -2px;
              font-size: 22px;
              font-weight: 600;
              color: #0084ff;
            }
            .articles-content {
              max-height: 105px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
  .zh-specials-asider {
    background-color: #fff;
    padding: 20px;
    .zh-asider-userInfo {
      margin: 0 auto;
      width: 80%;
      .zh-userInfo-img {
        text-align: center;
        img {
          width: 80px;
          height: 80px;
          padding: 20px;
        }
      }
      .zh-userInfo-name {
        font-size: 28px;
        font-weight: 600;
      }
    }
  }
}
</style>

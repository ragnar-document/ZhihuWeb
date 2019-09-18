<template>
  <div class="zh-home-page">
    <el-container>
      <el-main class="zh-home-main">
        <div class="zh-main-tabs">
          <router-link :to="{ name: 'Home' }">推荐</router-link>
          <router-link :to="{ name: 'Specials' }">热榜</router-link>
        </div>
        <zh-loading v-show="loading" />
        <div class="zh-main-list">
          <div
            class="zh-articles-item"
            v-for="item in recommend"
            :key="item.question.id"
          >
            <h3 class="zh-articles-title">{{ item.question.title }}</h3>
            <div class="zh-articles-container">
              <div class="zh-articles-cover" v-if="item.thumbnail">
                <img :src="item.thumbnail" />
              </div>
              <div class="zh-articles-content">
                <div class="articles-content">
                  {{ item.excerpt }}
                </div>
                <el-button type="text">阅读全文</el-button>
              </div>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Server from "../global/request";
import loading from "../components/_zh-loading";
export default {
  name: "home",
  data() {
    return {
      recommend: [],
      loading: true
    };
  },
  created() {
    this.render();
  },
  methods: {
    zhSelect() {
      this.hiddenBtn = this.hiddenBtn ? false : true;
    },
    render() {
      Server.recommend()
        .then(res => {
          console.log(res);
          let data = res.data.map(data => {
            if (data.target.question) {
              return data.target;
            }
          });
          this.recommend = data;
          this.loading = false;
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  components: {
    "zh-loading": loading
  }
};
</script>

<style lang="less">
.zh-home-page {
  .zh-home-main {
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
    .zh-main-list {
      .zh-articles-item {
        padding: 20px 40px;
        border-bottom: 1px solid #eee;
        .zh-articles-title {
          margin-bottom: 14px;
        }
        .zh-articles-container {
          display: flex;
          .zh-articles-cover {
            margin-right: 14px;
            img {
              height: 105px;
              width: 190px;
              background-color: #eee;
            }
          }
          .zh-articles-content {
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
}
</style>

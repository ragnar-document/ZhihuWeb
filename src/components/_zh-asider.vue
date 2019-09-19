<template>
  <el-aside class="zh-asider" width="300px">
    <div class="zh-asider-userInfo">
      <div class="zh-userInfo-img">
        <a href="https://github.com/ragnar-document">
          <img src="@/assets/github-square.png" alt />
        </a>
      </div>
      <div class="zh-userInfo-name">Ragnar</div>
      <div class="zh-userInfo-github"></div>
      <div class="zh-project-intro">
        技术栈：Vue / Element /axios
        <br />项目周期：4天 <br />信息来源:知乎官方 <br />API:模拟数据
      </div>
    </div>
    <div class="zh-asider-project">
      <div class="zh-project-title">开源实战项目</div>
      <div class="block">
        <el-carousel
          height="100px"
          :interval="5000"
          indicator-position="outside"
        >
          <el-carousel-item v-for="item in projectData" :key="item.name">
            <a :href="item.url">
              <div class="zh-project-list">
                <div class="zh-project-item">
                  <div class="zh-project-item-name">{{ item.name }}</div>
                  <div class="zh-project-item-intro">{{ item.intro }}</div>
                  <div class="zh-project-item-inn">{{ item.inn }}</div>
                </div>
              </div>
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {
      projectData: [
        {
          name: "VE-Admin",
          intro: "舞蹈培训班后台项目",
          inn: "Node.js/vue.js/小程序/elementUI",
          url: "https://github.com/ragnar-document/VE-Admin"
        },
        {
          name: "Koa-Admin",
          intro: "后台增删改项目",
          inn: "node.js/koa/vue.js/ElementUI",
          url: "https://github.com/ragnar-document/OKR-KOA"
        },
        {
          name: "OKR小程序",
          intro: "类似于todolist的小程序",
          inn: "node.js/koa/小程序",
          url: "https://github.com/ragnar-document/OKR-KOA"
        },
        {
          name: "V2EX小程序",
          intro: "一个某课卖99的简单小程序",
          inn: "小程序",
          url: "https://github.com/ragnar-document/Wechat-V2EX"
        }
      ]
    };
  },
  components: {}
};
</script>

<style lang="less">
.zh-asider {
  background-color: #fff;
  margin-top: 20px;
  height: 100%;
  padding: 20px 0;
  .zh-asider-userInfo {
    margin: 0 auto;
    width: 80%;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    .zh-userInfo-img {
      text-align: center;
      position: relative;
      img {
        width: 80px;
        height: 80px;
        padding: 20px;
        animation: spin 3s ease infinite;
      }
      &::before {
        position: absolute;
        display: inline-block;
        content: "";
        bottom: 16px;
        right: 60px;
        height: 16px;
        width: 16px;
        background: url("~@/assets/jiantou.png") no-repeat;
        background-size: 100%;
      }
    }
    .zh-userInfo-name {
      font-size: 28px;
      font-weight: 600;
    }
  }
  .zh-asider-project {
    padding: 20px 30px;
    .zh-project-title {
      padding-bottom: 10px;
      font-size: 18px;
      font-weight: 600;
    }
    .zh-project-list {
      .zh-project-item {
        border-right: 2px solid #0084ff;
        border-left: 2px solid #0084ff;
        background-color: aliceblue;
        padding: 10px;
        border-radius: 8px;
        transition: all 0.4s;
        &:hover {
          -webkit-box-shadow: 0px 10px 30px -10px rgba(0, 0, 0, 0.3);
          box-shadow: 0px 10px 30px -10px rgba(0, 0, 0, 0.3);
        }
        .zh-project-item-name {
          color: #0084ff;
          font-size: 20px;
          font-weight: 600;
        }

        .zh-project-item-intro {
          font-size: 12px;
          color: #888;
        }
        .zh-project-item-inn {
          color: #666;
          font-size: 12px;
          font-weight: 500;
        }
      }
    }
  }
}

@keyframes spin {
  50%,
  100% {
    transform: rotate(360deg);
  }
}
</style>

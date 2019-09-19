<template>
  <div style="height:100%;background:#fbfbfb;">
    <zh-header />
    <div class="zh-zhuanlan-main">
      <div class="zh-zhuanlan-banner">
        <h1 class="zh-banner-title">知乎专栏</h1>
        <p class="zh-banner-intro">随心写作，自由表达</p>
        <a class="zh-banner-writerBtn" href="javaScript:;">开始写文章</a>
        <a class="zh-banner-applyline" href="javaScript:;">申请开通专栏 ></a>
      </div>
      <div class="zh-zhuanlan-cardList">
        <div class="zh-cardList-title">专栏·发现</div>
        <div class="zh-cardlist">
          <zh-card :datas="zhuanlanData" />
        </div>
        <div style="text-align:center;margin-top:20px;">
          <a class="zh-rate-btn" href="javascript:;" @click="rateBtn">
            <span>
              <img src="@/assets/shuaxin.png" />
            </span>
            换一换
          </a>
        </div>
      </div>
      <div class="zh-zhuanlan-footer">
        <h3 class="zh-zhuanlan-footer-title">在知乎创作</h3>
        <a class="zh-gray-btn" href="javascript:;">申请专栏</a>
        <div class="zh-zhuanlan-footer-list">
          © 2019 知乎 · 知乎专栏 · 知乎圆桌·发现 · 移动应用 · 使用机构帐号登录 ·
          联系我们 · 来知乎工作
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import zhHeader from "./../components/_zh-header";
import zhUserCard from "./../components/_zh-userCard";
import Server from "../global/request";
export default {
  data() {
    return {
      Data: [],
      zhuanlanData: [],
      index: 1
    };
  },
  created() {
    this.render();
  },
  methods: {
    render() {
      Server.zhuanlanCard().then(res => {
        this.Data = res.data;
        let data = [];
        for (let i = 0; i < 8; i++) {
          data.push(res.data[i]);
        }
        this.zhuanlanData = data;
      });
    },
    rateBtn() {
      let Data = this.Data;
      let index = this.index++;
      let init = 8;
      let start = (index + 1) * init - init;
      let end = (index + 1) * init;
      if (end < Data.length) {
        let spliceData = Data.slice(start, end);
        this.zhuanlanData = spliceData;
      } else {
        this.index = 1;
      }
    }
  },
  components: {
    "zh-header": zhHeader,
    "zh-card": zhUserCard
  }
};
</script>

<style lang="less">
.zh-zhuanlan-main {
  width: 100%;
  background: #fff;
  .zh-zhuanlan-banner {
    position: relative;
    width: 100%;
    height: 470px;
    text-align: center;
    background: url("~@/assets/patterns.png") 50% no-repeat;
    &::before {
      background: url("~@/assets/bg@2x.033e5b2d.png");
      background-size: 20px 450px;
      content: "";
      height: 100%;
      left: 0;
      position: absolute;
      width: 100%;
    }
    .zh-banner-title {
      background: url("~@/assets/logo.84666bea.png") no-repeat;
      background-size: 129px 179px;
      height: 0;
      left: 50%;
      margin: 0 0 0 -65px;
      overflow: hidden;
      padding-top: 179px;
      position: absolute;
      top: 152px;
      width: 129px;
    }
    .zh-banner-intro {
      color: #1a1a1a;
      font-size: 18px;
      font-weight: 300;
      letter-spacing: 0.5em;
      line-height: 24px;
      margin: 0;
      position: absolute;
      text-align: center;
      top: 350px;
      width: 100%;
    }
    .zh-banner-writerBtn {
      border: 1px solid #444;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      color: #444;
      height: 38px;
      left: 50%;
      line-height: 36px;
      margin-left: -51px;
      position: absolute;
      top: 413px;
      width: 120px;
      font-size: 14px;
    }
    .zh-banner-applyline {
      font-size: 14px;
      left: 50%;
      line-height: 12px;
      margin-left: -36px;
      position: absolute;
      top: 466px;
      color: #11a668;
    }
  }

  .zh-zhuanlan-cardList {
    margin: 48px auto 0;
    width: 888px;
    .zh-cardList-title {
      text-align: center;
      color: #1a1a1a;
      font-size: 14px;
      line-height: 22px;
      margin: 16px;
      font-weight: 600;
      font-synthesis: style;
    }
  }

  .zh-zhuanlan-footer {
    text-align: center;
    margin-top: 30px;
    padding-top: 134px;
    background: url("~@/assets/bg@2x.033e5b2d.png") repeat-x;
    background-size: 20px 450px;
    .zh-zhuanlan-footer-title {
      border: solid #97ffd8;
      border-width: 1px 0;
      font-size: 18px;
      font-weight: 300;
      letter-spacing: 14px;
      padding: 26px 0;
      text-align: center;
      white-space: nowrap;
      width: 345px;
      margin: 0 auto;
      margin-bottom: 30px;
    }
    .zh-zhuanlan-footer-list {
      padding: 40px;
      color: #888;
      font-size: 12px;
    }
  }
}

.zh-rate-btn {
  display: inline-block;
  text-align: center;
  line-height: 32px;
  border: 1px solid #666;
  color: #666;
  font-size: 14px;
  border-radius: 4px;
  padding: 0 16px;
  span {
    display: inline-flex;
    align-items: center;
    height: 100%;
    img {
      display: inline-block;
      height: 15px;
      width: 15px;
    }
  }
}
.zh-gray-btn {
  display: inline-block;
  border: 1px solid #444;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #444;
  height: 38px;
  padding: 0 16px;
  line-height: 36px;
  font-size: 14px;
}
</style>

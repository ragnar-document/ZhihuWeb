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
          <div class="zh-cardlist-item">
            <img src alt />
            <div class="zh-cardItem-name">name</div>
            <div class="zh-cardItem-intro">12312312</div>
            <div class="zh-cardItem-mes">关注</div>
            <a class="zh-greenbtn" href="javascript:;">进入专栏</a>
          </div>
          <div class="zh-cardlist-item">
            <img src alt />
            <div class="zh-cardItem-name">name</div>
            <div class="zh-cardItem-intro">12312312</div>
            <div class="zh-cardItem-mes">关注</div>
            <a class="zh-greenbtn" href="javascript:;">进入专栏</a>
          </div>
          <div class="zh-cardlist-item">
            <img src alt />
            <div class="zh-cardItem-name">name</div>
            <div class="zh-cardItem-intro">12312312</div>
            <div class="zh-cardItem-mes">关注</div>
            <a class="zh-greenbtn" href="javascript:;">进入专栏</a>
          </div>
          <div class="zh-cardlist-item">
            <img src alt />
            <div class="zh-cardItem-name">name</div>
            <div class="zh-cardItem-intro">12312312</div>
            <div class="zh-cardItem-mes">关注</div>
            <a class="zh-greenbtn" href="javascript:;">进入专栏</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import zhHeader from "./../components/_zh-header";
import Server from "../global/request";
export default {
  data() {
    return {};
  },
  created() {
    this.render();
  },
  methods: {
    render() {
      Server.zhuanlanCard().then(res => {
        console.log(res.data);
      });
    }
  },
  components: {
    "zh-header": zhHeader
  }
};
</script>

<style lang="less">
.zh-zhuanlan-main {
  width: 100%;
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
    .zh-cardlist {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .zh-cardlist-item {
        flex: 1;
        text-align: center;
        padding: 24px 18px;
        margin: 0 8px 16px;
        -webkit-box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06);
        box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06);
        img {
          display: inline-block;
          height: 48px;
          width: 48px;
          margin-bottom: 16px;
          background-color: antiquewhite;
          border-radius: 50%;
        }
        .zh-cardItem-name {
          font-weight: 600;
          font-size: 17.4px;
        }
        .zh-cardItem-intro {
          color: grey;
          font-size: 14px;
          line-height: 21px;
          margin-top: 7px;
          text-align: center;
          word-break: break-all;
          display: -webkit-box;
          text-overflow: ellipsis;
          overflow: hidden;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .zh-cardItem-mes {
          color: grey;
          font-size: 14px;
          line-height: 21px;
          margin-top: 7px;
        }
        .zh-greenbtn {
          display: inline-block;
          border: 1px solid #11a668;
          color: #11a668;
          line-height: 32px;
          font-size: 14px;
          padding: 0 16px;
          margin-top: 7px;
          border-radius: 4px;
        }
      }
    }
  }
}
</style>

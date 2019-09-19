<template>
  <div class="zh-find-page">
    <div class="zh-find-zhuanti">
      <h3 class="zh-zhuanti-title">
        <svg
          class="Zi Zi--LabelSpecial"
          fill="currentColor"
          viewBox="0 0 24 24"
          width="36"
          height="36"
        >
          <path
            d="M7.667 3.667h11.466a1.2 1.2 0 0 1 1.2 1.2v13.066a2.4 2.4 0 0 1-2.4 2.4H6.467V4.867a1.2 1.2 0 0 1 1.2-1.2zM4.2 9.619h1.689v10.714H5.4a2.4 2.4 0 0 1-2.4-2.4V10.82a1.2 1.2 0 0 1 1.2-1.2zm5.178-2.38a.6.6 0 0 0-.6.6v.585a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378zm0 3.57a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.585a.6.6 0 0 0-.6-.6H9.378zm0 3.572a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h4.578a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378z"
            fill-rule="evenodd"
          ></path>
        </svg>
        <span>最新专题</span>
      </h3>
      <Card :datas="newSpeciaData" />
      <el-button @click="moreData" style="margin:0 auto;display:block;" round
        >查看更多内容 >></el-button
      >
    </div>
  </div>
</template>
<style lang="less">
.zh-find-page {
  width: 680px;
  padding-right: 20px;
  .zh-find-zhuanti {
    .zh-zhuanti-title {
      padding-bottom: 20px;
      svg {
        fill: #0084ff;
      }
      span {
        font-size: 25px;
        vertical-align: super;
      }
    }
  }
}
</style>

<script>
import Server from "../global/request";
import card from "./../components/_zh-introCard";
export default {
  data() {
    return {
      newSpeciaData: [],
      moreSpeciaData: [],
      index: 1
    };
  },
  created() {
    this.render();
  },
  methods: {
    render() {
      Server.newsSpecialsList().then(res => {
        this.moreSpeciaData = res.data;
        console.log(res.data);
        let data = [];
        for (let i = 0; i < 4; i++) {
          data.push(res.data[i]);
        }
        this.newSpeciaData = data;
      });
    },
    moreData() {
      let Data = this.moreSpeciaData;
      let index = this.index++;
      let init = 4;
      let num = (index + 1) * init;
      let Datalength = Data.length;
      let newSpeciaData = [];
      console.log(num);
      if (num - 1 <= Datalength) {
        for (let i = 0; i < num; i++) {
          newSpeciaData.push(Data[i]);
        }
        this.newSpeciaData = newSpeciaData;
      } else {
        this.$message({
          message: "mock数据有限",
          type: "warning"
        });
      }
    }
  },
  components: {
    Card: card
  }
};
</script>

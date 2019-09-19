<template>
  <div class="zh-cardlist">
    <div class="zh-cardlist-item" v-for="item in datas" :key="item.title">
      <img :src="item.image_url" alt />
      <div class="zh-cardItem-name">{{ item.title }}</div>
      <div class="zh-cardItem-intro">{{ item.intro }}</div>
      <div class="zh-cardItem-mes">
        {{ item.followers }}人关注 | {{ item.articles_count }}篇文章
      </div>
      <a class="zh-greenbtn" href="javascript:;">进入专栏</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    datas: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="less">
.zh-cardlist {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  .zh-cardlist-item {
    width: 206px;
    text-align: center;
    padding: 24px 0;
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
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0 20px;
    }
    .zh-cardItem-intro {
      color: grey;
      font-size: 14px;
      line-height: 21px;
      height: 42px;
      margin-top: 7px;
      padding: 0 16px;
      text-align: center;
      word-break: break-all;
      display: -webkit-box;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
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
</style>

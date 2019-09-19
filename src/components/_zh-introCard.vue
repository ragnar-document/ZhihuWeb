<template>
  <div class="zh-zhuanti-list">
    <div class="zh-zhuanti-item" v-for="item in datas" :key="item.title">
      <img class="zh-zhuanti-item-img" :src="item.banner" alt />
      <div class="zh-zhuanti-item-content">
        <div
          style="height:80px;border-bottom:1px solid #eee;padding-bottom:20px"
        >
          <h3 class="zh-zhuanti-item-title">{{ item.title }}</h3>
          <div class="zh-zhuanti-item-intro">{{ item.introduction }}</div>
        </div>
        <div class="zh-zhuanti-item-relevant">
          <Tag
            :title="i.section_title"
            v-for="i in item.section_list"
            :key="i.section_title"
            style="margin:0 5px 5px 0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from "../components/_zh-tag";
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
  components: {
    Tag
  }
};
</script>

<style lang="less">
.zh-zhuanti-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .zh-zhuanti-item {
    background-color: #fff;
    width: 49%;
    margin-bottom: 10px;
    transition: all 0.4s;
    border-radius: 4px;
    overflow: hidden;
    &:hover {
      -webkit-box-shadow: 0px 10px 30px -10px rgba(0, 0, 0, 0.3);
      box-shadow: 0px 10px 30px -10px rgba(0, 0, 0, 0.3);
    }
    .zh-zhuanti-item-img {
      display: block;
      width: 100%;
      height: 100px;
    }
    .zh-zhuanti-item-content {
      padding: 10px;
      .zh-zhuanti-item-title {
        font-size: 20px;
        font-weight: 600;
      }
      .zh-zhuanti-item-intro {
        color: #999;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .zh-zhuanti-item-relevant {
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
      }
    }
  }
}
</style>

<template>
  <div>
    <div class="zh-tag bbg">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },

  data() {
    return {};
  },
  components: {}
};
</script>

<style>
.zh-tag {
  display: inline-block;
  height: 16px;
  line-height: 16px;
  color: #8590a6;
  font-size: 10px;
  padding: 2px 14px;
  border-radius: 4px;
}
.bbg {
  background-color: #f6f6f6;
}
</style>

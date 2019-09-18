module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://yapi.weilaigongzuo.com",
        ws: true,
        changeOrigin: true
      }
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/ZhihuWeb/" : "/"
};

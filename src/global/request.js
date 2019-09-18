import API from "./api";
import Axios from "./axios";

const Serve = {
  recommend() {
    return Axios.get(API.recommend);
  },
  select() {
    return Axios.get(API.select);
  },
  hostlist() {
    return Axios.get(API.hostList);
  },
  hostLists(params) {
    let name = params || "";
    return Axios.get(API.hostListItem(name));
  },
  newsSpecialsList() {
    return Axios.get(API.newsSpecialsList);
  },
  zhuanlanCard() {
    return Axios.get(API.zhuanlanCard);
  }
};

export default Serve;

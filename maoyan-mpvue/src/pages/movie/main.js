import Vue from 'vue'
import App from './index'


export default {
  config: {
    "enablePullDownRefresh": true,
    
  },
  onReachBottom() {
    // 到这底部在这里需要做什么事情
    this.loadMore();
  },
}
const app = new Vue(App)
app.$mount()

import Vue from 'vue'
import App from './index'


export default {
  config: {
  enablePullDownRefresh: false,
  navigationBarTitleText: '我的',
  }
}
const app = new Vue(App)
app.$mount()



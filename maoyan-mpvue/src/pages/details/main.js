import Vue from 'vue'
import App from './index'


export default {
  config: {
  "navigationBarTitleText": '影片详情',
  }
}
const app = new Vue(App)
app.$mount()
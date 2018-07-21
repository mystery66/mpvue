import Vue from 'vue'
import App from './index'



const app = new Vue(App)
app.$mount()
export default {
  config: {
    "navigationBarBackgroundColor": "#DD403B",
    "navigationBarTextStyle": "white",
    "navigationBarTitleText": "当前城市",
    
    "backgroundTextStyle": "light"
  }
}
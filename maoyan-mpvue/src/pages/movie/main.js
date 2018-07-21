import Vue from 'vue'
import App from './index'


export default {
  config: {
    enablePullDownRefresh: () =>{
      setTimeout(() => {
        wx.stopPullDownRefresh()
      }, 2000);
      
    }
    
  }
}
const app = new Vue(App)
app.$mount()

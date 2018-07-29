import Vue from 'vue'
import App from './App'
import Fly from 'flyio/dist/npm/wx'

var fly = new Fly
Vue.prototype.$http = fly

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', '^pages/movie/main','pages/cinema/main','pages/user/main','pages/cities/main','pages/search/main'],
    window: {
      backgroundTextStyle: 'black',
      navigationBarBackgroundColor: '#DD403B',
      navigationBarTitleText: '猫眼电影',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: true
    },
    tabBar: {
      color: "#696969",
      selectedColor: "#EF4238",
      borderStyle: "#d8d8d8",
      backgroundColor: "#FFFFFF",
      list: [
          {
              text: "电影",
              pagePath: "pages/movie/main",
              iconPath: "/static/images/icon-movie.png",
              selectedIconPath: "/static/images/icon-movie-selected.png"
          },
          {
              text: "影院",
              pagePath: "pages/cinema/main",
              iconPath: "/static/images/icon-cinema.png",
              selectedIconPath: "/static/images/icon-cinema-selected.png"
          },
          {
              text: "我的",
              pagePath: "pages/user/main",
              iconPath: "/static/images/icon-mine.png",
              selectedIconPath: "/static/images/icon-mine-selected.png"
          }
      ]
  }
}
}

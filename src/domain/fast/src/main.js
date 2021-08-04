import './public-path'
import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import registerGlobalModule from './store/global-register'
import store from './store'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
let instance = null
function render (props = {}) {
  const { container, routerBase } = props
  const router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL,
    mode: 'history',
    routes
  })

  instance = new Vue({
    router,
    store,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  // 这里是子应用独立运行的环境，实现子应用的登录逻辑
  render()
}

export async function bootstrap () {
}

export async function mount (props) {
  registerGlobalModule(store, props)
  render(props)
}

export async function unmount () {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}

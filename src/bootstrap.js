import { registerMicroApps, start, setDefaultMountApp,  initGlobalState} from 'qiankun';
import store from "./store"

const initialState = store.getState()
const actions = initGlobalState(initialState)

actions.onGlobalStateChange((newState, prev) => {
  console.log('main change', JSON.stringify(newState), JSON.stringify(prev))
})

// 定义一个获取state的方法下发到子应用
actions.getGlobalState = (key) => {
  return key ? initialState[key] : initialState
}
const microApps = [
  {
    name: 'sub-fast',
    entry: 'http://localhost:8081/subapp/sub-fast/',
    activeRule: '/subapp/sub-fast'
  },
  {
    name: 'sub-vue',
    entry: 'http://localhost:8080/subapp/sub-vue/',
    activeRule: '/subapp/sub-vue'
  },
]

const apps = microApps.map(item => {
  return {
    ...item,
    container: '#container', // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      getGlobalState: actions.getGlobalState // 下发getGlobalState方法
    }
  }
}) 
export default async function bootstrap() {
  registerMicroApps(apps);
  setDefaultMountApp('/subapp/sub-vue')
  start();
}

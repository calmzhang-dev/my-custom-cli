import { createApp } from 'vue'
import router, { setupRouter } from '@/router/index'
import { setupPlugins } from './plugins'
import App from './App.vue'
import '@/styles/global.scss'

async function bootstrap() {
  const app = createApp(App)
  setupRouter(app)
  setupPlugins(app)
  // 最新router是异步，需要等待router加载完之后再导出
  await router.isReady()
  app.mount('#app')
}

bootstrap()

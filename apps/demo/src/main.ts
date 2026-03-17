import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import * as ArcoVueIcons from '@arco-design/web-vue/es/icon'
import '@arco-design/web-vue/dist/arco.css'
import 'aviator-expression-builder/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(ArcoVue)

for (const [name, component] of Object.entries(ArcoVueIcons)) {
  app.component(name, component)
}

app.mount('#app')

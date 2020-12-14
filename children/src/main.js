import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './public-path.js'

let app = null
const render = (props) => {
    console.log(props);
    app = createApp(App).use(store).use(router)
    app.mount('#app')
}
if (!window.__POWERED_BY_QIANKUN__) {
    render({})
}

export async function bootstrap() {
    console.log('react app bootstraped');
}
export async function mount(props) {
    console.log('进来了');
    render(props)
}
export async function unmount(props) {
    console.log(props);
    if (app) {
        // app.$destroy()
        app = null
    }
}

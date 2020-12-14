import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun'


registerMicroApps([
    {
        name: 'children',
        entry: 'http://localhost:8082',
        container: '#vue',
        activeRule: '/user'
    }
], {
    beforeMount: app => {
        console.log('beforeMount', app.name);
        return Promise.resolve()
    },
    afterMount: app => {
        console.log('afterMount', app.name);
        return Promise.resolve()
    }
})

start()

createApp(App).use(store).use(router).mount('#rootApp')

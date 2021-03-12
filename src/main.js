import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import neo4j from './plugins/neo4j'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  neo4j,
  render: h => h(App)
}).$mount('#app')

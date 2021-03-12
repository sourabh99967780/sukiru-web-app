import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

const opts = {
  theme: {
    themes: {
      light: {
        primary: '#00a99e',
        secondary: '#1d1d1d',
        accent: '3f3f41'
      },
      dark: {
        primary: '#00a99e',
        secondary: '#ffffff',
        accent: 'd1d1d1'
      }
    }
  }
}

export default new Vuetify(opts)

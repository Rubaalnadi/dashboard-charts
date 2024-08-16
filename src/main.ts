import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
import App from './App.vue'

// Create Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
})

// Create Vue app and use Vuetify
createApp(App).use(vuetify).mount('#app')

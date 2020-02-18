import Vue from 'vue'

import './styles/quasar.styl'
import lang from 'quasar/lang/pt-br.js'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import {
  Quasar,
  Notify,
  Dialog
} from 'quasar'

Vue.use(Quasar, {
  components: { /* not needed if importStrategy is not 'manual' */ },
  directives: { /* not needed if importStrategy is not 'manual' */ },
  plugins: {
    Notify,
    Dialog
  },
  lang: lang,
  config: {
    notify: {
      position: 'top-right',
      actions: [{ icon: 'close', color: 'white' }]
    }
  }
})

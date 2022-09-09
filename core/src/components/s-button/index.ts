import type { App, Plugin } from 'vue'
import SButton from './s-button.vue'

export const SButtonPlugin: Plugin = {
  install(app: App) {
    app.component('s-button', SButton)
  },
}

export { SButton }

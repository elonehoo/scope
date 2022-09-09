import type { App, Plugin } from 'vue'
import SIconPreloader from './s-icon-preloader.vue'

export const SIconPreloaderPlugin: Plugin = {
  install(app: App) {
    app.component('s-icon-preloader', SIconPreloader)
  },
}

export { SIconPreloader }

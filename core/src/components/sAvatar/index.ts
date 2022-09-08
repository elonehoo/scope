import type { App, Plugin } from 'vue'
import SAvatar from './sAvatar.vue'

export const SAvatarPlugin: Plugin = {
  install(app: App) {
    app.component('SAvatar', SAvatar)
  },
}

export { SAvatar }

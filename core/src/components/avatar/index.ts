import type { App, Plugin } from 'vue'
import SAvatar from './SAvatar.vue'

export const SAvatarPlugin: Plugin = {
  install(app: App) {
    app.component('SAvatar', SAvatar)
  },
}

export { SAvatar }

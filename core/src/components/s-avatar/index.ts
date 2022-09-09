import type { App, Plugin } from 'vue'
import SAvatar from './s-avatar.vue'

export const SAvatarPlugin: Plugin = {
  install(app: App) {
    app.component('s-avatar', SAvatar)
  },
}

export { SAvatar }

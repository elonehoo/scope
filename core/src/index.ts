import type { App, Plugin } from 'vue'

import { SAvatarPlugin } from './components/s-avatar'
import { SIconPreloaderPlugin } from './components/icons/s-icon-preloader'

const pickPlugin: Plugin = {
  install(app: App) {
    SAvatarPlugin.install?.(app)
    SIconPreloaderPlugin.install?.(app)
  },
}

export default pickPlugin

import './style/bootstrap.css'

export * from './components/s-avatar'
export * from './components/icons/s-icon-preloader'

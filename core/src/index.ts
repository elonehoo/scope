import type { App, Plugin } from 'vue'

import { SAvatarPlugin } from './components/s-avatar'

const pickPlugin: Plugin = {
  install(app: App) {
    SAvatarPlugin.install?.(app)
  },
}

export default pickPlugin

import './style/bootstrap.css'

export * from './components/s-avatar'

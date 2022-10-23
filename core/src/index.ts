import type { App, Plugin } from 'vue'

import { SAvatarPlugin } from './components/avatar'
import { SIconPlugin } from './components/icon'

import './style/bootstrap.css'

const pickPlugin: Plugin = {
  install(app: App) {
    SAvatarPlugin.install?.(app)
    SIconPlugin.install?.(app)
  },
}

export default pickPlugin

export * from './components/avatar'
export * from './components/icon'

import type { App, Plugin } from 'vue'

import { SAvatarPlugin } from './components/avatar'
import { SIconPlugin } from './components/icon'

const pickPlugin: Plugin = {
  install(app: App) {
    SAvatarPlugin.install?.(app)
    SIconPlugin.install?.(app)
  },
}

export default pickPlugin

import './style/bootstrap.css'

export * from './components/avatar'
export * from './components/icon'

import type { App, Plugin } from 'vue'
import SIcon from './SIcon.vue'

export const SIconPlugin: Plugin = {
  install(app: App) {
    app.component('SIcon', SIcon)
  },
}

export { SIcon }

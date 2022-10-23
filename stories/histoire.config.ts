import { defaultColors, defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  plugins: [
    HstVue(),
  ],

  setupFile: './histoire.setup.ts',
  viteNodeInlineDeps: [
    /scope/,
  ],
  theme: {
    title: 'Scope',
    colors: {
      primary: defaultColors.neutral,
    },
  },

  backgroundPresets: [
    { label: 'Transparent', color: 'transparent' },
    { label: 'Light', color: '#fafafa' },
    { label: 'Dark', color: '#191919' },
  ],
})

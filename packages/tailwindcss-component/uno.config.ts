import { defineConfig, presetAttributify, presetUno } from 'unocss';
import presetIcons from '@unocss/preset-icons'
// import { presetAttributify } from "@unocss/preset-attributify"

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons()
  ]
})
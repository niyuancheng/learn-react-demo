import { defineConfig, presetAttributify, presetUno } from 'unocss';
// import { presetAttributify } from "@unocss/preset-attributify"

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno(),
    presetAttributify()
  ]
})
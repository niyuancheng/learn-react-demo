import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

/**
 * @param {string} _url
 * @desc 将 组件渲染成 html 字符串
 */
export function render(_url) {
  const html = renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
  return { html }
}
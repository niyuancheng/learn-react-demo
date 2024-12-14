import { StrictMode } from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import App from './App.jsx'
// 水合，而非传统的render
hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
    <App />
  </StrictMode>,
)
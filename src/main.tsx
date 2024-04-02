import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import './index.css'

// react funciona como um agregador de componentes e propriedades

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Banner from './banner'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Banner />
    <App />
  </React.StrictMode>
)

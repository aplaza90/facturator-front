import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SearchProvider } from './context/search.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SearchProvider>
    <App />
  </SearchProvider>
)

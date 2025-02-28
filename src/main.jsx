import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import ItemStore from './Components/features/ItemStore.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={ItemStore}>
    <App />
  </Provider>
  </React.StrictMode>,
)

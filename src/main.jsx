import React, { createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

export const Data = createContext('data')
export const MoneyContext = createContext()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
  <Data.Provider value="light" >
  <App></App>
  </Data.Provider>

  </React.StrictMode>,
)

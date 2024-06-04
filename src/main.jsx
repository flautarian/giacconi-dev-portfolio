import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App'
import './index.css'
import "./i18n";
import { MainProvider } from './Providers/ContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </React.StrictMode>,
)

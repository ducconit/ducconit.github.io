import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { Provider } from 'react-redux'
import redux from './stores/redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={redux}>
      <App />
    </Provider>
  </React.StrictMode>,
)

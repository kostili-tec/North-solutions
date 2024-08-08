import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { setupStore } from './app/store/store.ts';
import App from './app/App.tsx'
import './index.css'

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

import '@reach/dialog/styles.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './pages/App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import store from './state'
import { ThemedGlobalStyle } from './theme'

if (!!window.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false
}

// Sentry.init({
//   dsn: '',
//   integrations: [new BrowserTracing()],

//   tracesSampleRate: 1.0,
// })

ReactDOM.render(
  // <StrictMode>
  <Provider store={store}>
    <ThemedGlobalStyle />
    <App />
  </Provider>,
  // </StrictMode>,
  document.getElementById('root')
)

serviceWorkerRegistration.unregister()

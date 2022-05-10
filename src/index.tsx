import '@reach/dialog/styles.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import store from './state'
import 'aos/dist/aos.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ThemeProvider, { ThemedGlobalStyle } from './theme'

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
    <ThemeProvider>
      <ThemedGlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>,
  // </StrictMode>,
  document.getElementById('root')
)

serviceWorkerRegistration.unregister()

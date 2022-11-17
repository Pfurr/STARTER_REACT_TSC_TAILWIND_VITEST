import React from 'react'
import { createRoot } from 'react-dom/client'

import './App.css'

import App from './App'

const container = document.getElementById('root')
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

//* config msw browser enable!
//! COMMENT ON THE CODE ABOVE TO AVOID MOCKING API REST!
if (process.env.NODE_ENV === 'development') {
  import('../mocks/browser')
    .then(({ worker }) => {
      // LINK MANAGE WARNING IN CONSOLE -> BROWSER: https://mswjs.io/docs/api/setup-worker/start#onunhandledrequest
      worker.start({
        onUnhandledRequest: 'bypass' //? Performs an unhandled request as-is.
      })
    })
    .then(() => {
      root.render(<App />)
    })
} else {
  root.render(<App />)
}
//! END

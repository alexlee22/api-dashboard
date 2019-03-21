import React from 'react'
import { render } from 'react-dom'
import "./sass/main.scss";

import App from './components/App'

function renderApp() {
  const App = require('./components/App').default
  render(<App />, root)
}

renderApp()

module.hot.accept(renderApp)

import React from 'react'
import { render } from 'react-dom'
import "./sass/main.scss";

function renderApp() {
  const App = require('./components/App').default
  render(<App />, root)
}

renderApp()

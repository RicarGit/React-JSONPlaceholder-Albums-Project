import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { createGlobalStyle } from 'styled-components'
import App from './App'

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
}

code {
  font-family: source - code - pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`

const root = ReactDom.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </StrictMode>
)
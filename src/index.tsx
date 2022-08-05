import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'

import { createGlobalStyle } from 'styled-components'
import App from './App'

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
    <GlobalStyle />
    <App />
  </StrictMode>
)
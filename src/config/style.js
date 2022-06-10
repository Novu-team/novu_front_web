import reset from 'styled-reset'
import { get } from 'lodash'
import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
  ${reset}

  url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
  *, *::before, *::after {
    box-sizing: border-box;
  }
  #root {
    width: 100%;
    height: 100%;
  }
  html {
    height: 100%;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    height: 100%;
    
    background-image: linear-gradient(#FCFDFF, #F3F7FF);
    background-repeat: no-repeat;
    color: ${get(theme, 'grey', '#000')};
  }
`

export default GlobalStyle
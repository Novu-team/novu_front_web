import reset from 'styled-reset'
import { get } from 'lodash'
import { createGlobalStyle } from 'styled-components'

import theme from './theme'

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap');
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
    height: 100%;
    font-family: 'Source Sans Pro', sans-serif;
    background-image: linear-gradient(#FCFDFF, #F3F7FF);
    background-repeat: no-repeat;
    color: ${get(theme, 'grey', '#000')};
  }
`

export default GlobalStyle
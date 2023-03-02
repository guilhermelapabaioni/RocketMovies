import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.COLORS.background_main};
    color: ${({ theme }) => theme.COLORS.white};

    -webkit-font-smoothing: antialised;
  }

  body, input, button, textarea{
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a{
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover{
    filter: brightness(0.9);
  }
`

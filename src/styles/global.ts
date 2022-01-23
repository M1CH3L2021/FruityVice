import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css'

import FruitImg from '../assets/bg-fruits.jpg'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
  }

  :root {
    --white: #FFFFFF;
    --gray: #DEDEDE;
    --light-green: #c8e6d0;
    --green: #0dbf3d;
    --red: #fc3247;
    --black: #122417;
  }

  html {
    font-size: 62.5%;

    background-image: url(${FruitImg});
    background-attachment: fixed;
    background-size: cover;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar{
    height: 5px;
    width: 5px;
  }

  ::-webkit-scrollbar-track{
    background-color: var(--black);
  }

  ::-webkit-scrollbar-thumb{
    background-color: var(--green);
    border-radius: 10px;
  }

  .Toastify__toast-container {
    font-size: 1.4rem;
    width: 80%;
    max-width: 35rem;
    margin-left: 5rem;
  }
`
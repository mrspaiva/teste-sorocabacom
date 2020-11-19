import styled from 'styled-components'
import background from '../../assets/background-1.png'

export const App = styled.div`
  .content {
    width: 100vw;
    height: 115vh;
    background-image: url(${background});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content .card {
    width: 50vw;
  }

  .navbar {
    width: 100%;
    height: 3.8rem;
    background-color: #363636;
    display: flex;
    justify-content: center;
    z-index: 1;
  }

  .navbar section {
    display: flex;
    align-items: center;
  }

  .navbar img {
    height: 3.8rem;
  }

  .navbar h1 {
    color: #FFFFFF;
    text-transform: uppercase;
    letter-spacing: 0.68px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 1.4rem;
    margin-left: 1.6rem;
    margin-top: 2rem;
  }

  .secondContent {
    min-height: 120vh;
    width: 100vw;
    background-color: #363636;
    z-index: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: end;
    padding-bottom: 10rem;
  }

  .secondContent .down { 
    position: absolute;
    z-index: 1;
    width: 1rem;
    height: 1.8rem;
    background-color: #FFFFFF;
    top: -1rem;
    border-radius: 5rem;
    box-shadow: 0px 3px 6px #00000029;
  }

  .secondContent .left {
    z-index: 1;
    width: 1rem;
    height: 1rem;
  }

  .secondContent .charac {
    position: absolute;
    width: 75vw;
    display: grid;
    grid-row-gap: 8rem;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    justify-items: center;
  }

  .thirdContent {
    width: 100vw;
    height: 70vh;
    background: linear-gradient(143deg, #7DEDE2 0%, #58B790 100%);
    position: relative;
    display: flex;
    justify-content: center;
  }

  .thirdContent .bgc-form {
    position: absolute;
    z-index: 1;
    height: 82vh;
    width: 58vw;
    top: -3rem;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 6px #0000004D;
    border-radius: 0.4rem;
    display: flex;
  }

  .bgc-form section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem 6rem;
  }

  section h1 {
    font-family: 'Montserrat', sans-serif;
    letter-spacing: -0.88px;
    font-size: 1.8rem;
    font-weight: bold;
    color: #63C7A9;
    margin-bottom: 2rem;
  }

  section p {
    color: #363636;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    margin-bottom: 2rem;
    line-height: 1.1rem;
  }

  form {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 12rem 12rem;
    grid-template-rows: 3fr;
    grid-template-areas:
    "nome email"
    "mensagem mensagem"
  }

  form .nome {
    font-family: 'Open Sans', sans-serif;
    border: 1px solid #363636;
    padding-left: 1rem;
    margin-right: 1rem;
    height: 2.2rem;
    grid-area: nome;
  }

  form .email {
    font-family: 'Open Sans', sans-serif;
    border: 1px solid #363636;
    padding-left: 1rem;
    grid-area: email;
  }

  form .mensagem {
    font-family: 'Open Sans', sans-serif;
    font-size: 0.9rem;
    border: 1px solid #363636;
    height: 8rem;
    margin-top: 2rem;
    padding-left: 1rem;
    padding-top: 0.8rem;
    grid-area: mensagem;
  }

  form button {
    text-transform: uppercase;
    margin-top: 2rem;
    height: 2.5rem;
    background-color: #63C7A9;
    color: #FFFFFF;
    font-family: 'Open Sans', sans-serif;
    text-decoration: none;
    border: none;
    cursor: pointer;
  }

  footer {
    height: 40vh;
    width: 100vw;
    background-color: #363636;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

  footer .swipe {
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    background-color: #FFFFFF;
    margin-right: 4rem;
    margin-bottom: 2rem;
  }
`
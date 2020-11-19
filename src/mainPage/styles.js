import styled from 'styled-components'

export const App = styled.div`
    overflow: hidden;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .content .bg {
    width: 100vw;
    height: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .navbar {
    position: absolute;
    width: 100%;
    height: 4.8rem;
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
    height: 4.8rem;
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

  .firstCard {
    position: absolute;
    top: 1rem;
    height: 100%;
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
    cursor: pointer;
  }

  .secondContent .downArrow {
    position: absolute;
    z-index: 1;
    width: 0.8rem;
    display: flex;
    justify-content: flex-start;
    top: 0.8rem;
    color: #FFFFFF;
    cursor: pointer;
  }

  .secondContent .arrow {
    width: 90vw; 
    height: 90vh;
    display: flex;
    justify-content: space-between;
  }

  .arrow .left {
    z-index: 1;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-self: center;
    cursor: pointer;
  }

  .arrow .right {
    z-index: 1;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-self: center;
    cursor: pointer;
  }

  .secondContent .charac {
    position: absolute;
    width: 75vw;
    max-height: 60vh;
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
    align-items: center;
    justify-content: center;
  }

  .bgc-form section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%
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

  form .nome:focus {
    border: 1.5px solid #363636
  }

  form .email {
    font-family: 'Open Sans', sans-serif;
    border: 1px solid #363636;
    padding-left: 1rem;
    grid-area: email;
  }

  form .email:focus {
    border: 1.5px solid #363636
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

  form .mensagem:focus {
    border: 1.5px solid #363636
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
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swipe .up {
    position: absolute;
    width: 2.5rem;
    cursor: pointer;
  }

  
`
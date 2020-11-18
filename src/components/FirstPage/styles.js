import styled from 'styled-components'
import background from '../../assets/background-1.png'


export const App = styled.div`
  .content {
    position: absolute;
    background-image: url(${background});
    background-size: 100%;
    background-repeat: no-repeat;
    height: 130vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .navbar {
    width: 100vw;
    height: 4.8rem;
    background-color: #363636;
    display: flex;
    justify-content: center;
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
  }

  .card {
    position: relative;
    display: flex;
    justify-content: center;
    width: 50vw;
  }

  .card .cardBackground {
    position: absolute;
    width: 32vw;
  }

  .card .cardTitle {
    position: absolute;
    display: block;
    width: 100vw;
  }

  .card h2 {
    position: absolute;
    z-index: 1;
    color: #FFFFFF;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.7rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-left: 31rem;
  }

  .card .cardCharacter {
    position: absolute;
    width: 28vw;
    height: 82vh;
    top: 3rem;
  }

  .card .cardContent {
    z-index: 1;
    display: block;
    margin-top: 37.2rem;
    width: 12rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: regular;
    font-size: 0.9rem;
    text-shadow: 0px 3px 6px #00000029;
    color: #F0F0F2;
    text-align: center;
  }

  .cardContent p {
    color: #FFFFFF;
  }
`
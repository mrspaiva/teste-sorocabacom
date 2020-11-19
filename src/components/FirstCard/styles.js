import styled from 'styled-components';

export const App = styled.div`
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card .cardBackground {
    position: absolute;
    width: 32vw;
    top: -4rem
  }

  .card .cardTitle {
    position: absolute;
  }

  .card h2 {
    z-index: 1;
    color: #FFFFFF;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.7rem;
    font-weight: bold;
    margin-top: 1rem;
    width: 12rem;
    margin-left: -10rem;
  }

  .card .cardCharacter {
    position: absolute;
    width: 28vw;
    height: 82vh;
    top: 2.5rem;
  }

  .card .pena1 {
    position: absolute;
    z-index: 1;
    height: 7rem;
    top: 14rem;
    right: 8rem;
  }

  .card .pena2 {
    position: absolute;
    z-index: 1;
    height: 7rem;
    top: 21rem;
    right: 5.2rem;
  }

  .card .pena3 {
    position: absolute;
    z-index: 1;
    height: 7rem;
    top: 16rem;
    left: 5.4rem;
  }

  .card .pena4 {
    position: absolute;
    z-index: 1;
    height: 6rem;
    top: 21.4rem;
    left: 8.2rem;
  }

  .card .cardContent {
    z-index: 1;
    display: block;
    margin-top: 37.2rem;
    padding-bottom: 4rem;
    width: 12rem;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.9rem;
    text-shadow: 0px 3px 6px #00000029;
    color: #F0F0F2;
    text-align: center;
  }

  .cardContent p {
    color: #FFFFFF;
  }
`

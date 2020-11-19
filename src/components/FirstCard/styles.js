import styled from 'styled-components';

export const App = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
  .cardBackground {
    position: relative;
    width: 31vw;
    display: flex;
  }

  .card {
    top: -0.8rem;
    position: absolute; 
    width: 32vw;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }

  .card h2 {
    z-index: 1;
    color: #FFFFFF;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.7rem;
    font-weight: bold;
    margin-left: -12rem;
    padding-top: 5.4rem;
    padding-bottom: 1rem;
  }

  .card .cardCharacter {
    width: 28vw;
    height: 82vh;
  }

  .card .pena1 {
    position: absolute;
    z-index: 1;
    height: 7rem;
    top: 19rem;
    right: 0;
  }

  .card .pena2 {
    position: absolute;
    z-index: 1;
    height: 7rem;
    top: 25.8rem;
    right: -2.4rem;
  }

  .card .pena3 {
    position: absolute;
    z-index: 1;
    height: 7rem;
    top: 20.5rem;
    left: -2.4rem;
  }

  .card .pena4 {
    position: absolute;
    z-index: 1;
    height: 6rem;
    top: 25.4rem;
    left: 1rem;
  }

  .card .cardContent {
    z-index: 1;
    display: block;
    width: 12rem;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.9rem;
    text-shadow: 0px 3px 6px #00000029;
    color: #F0F0F2;
    text-align: center;
    padding-top: 0.6rem;
  }

  .cardContent p {
    color: #FFFFFF;
  }
`

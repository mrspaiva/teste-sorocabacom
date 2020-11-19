import styled from 'styled-components';


export const App = styled.div`
  .card {
    width: 16rem;
  }

  .card .cardDescriptionGrant {
    position: relative;
    background-color: #fff;
    height: 28rem;
    width: 16rem;
    border-radius: 1.2rem;
    box-shadow: 0px 3px 6px #FFFFFF63;
    display: flex;
    justify-content: center;
  }

  .card .cardCharacter {
    position: absolute;
    background-color: #363636;
    height: 20rem;
    width: 15rem;
    border-radius: 3rem;
    top: -4rem;
    border: 2px solid #fff
  }

  .card .cardCharacter .cardGrant {
    position: absolute;
    height: 24rem;
    width: 16.5rem;
    top: -3.7rem;
    left: -0.8rem;
  }

  .cardDescriptionGrant .cardText {
    position: relative;
    width: 13rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 6rem;
  }

  .cardText p {
    position: absolute;
    color: #363636;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.8rem;
    
  }
` 
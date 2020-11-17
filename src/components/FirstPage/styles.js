import styled from 'styled-components'
import background from '../../assets/background-1.png'


export const Content = styled.div`
  position: absolute;
  background-image: url(${background});
  background-size: contain;
  background-repeat: no-repeat;
  height: 130vh;
  width: 100vw;
  overflow-y: scroll;


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
    display: flex;
    justify-content: center;
  }

  .card img {
    position: absolute;
    height: 100vh;
    width: 36rem;

  }
`
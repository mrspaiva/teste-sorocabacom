import { App } from './styles';
import background from '../assets/background-1.png'
import Logo from '../assets/logo.png';
import FirstCard from '../components/FirstCard';
import Grant from '../components/Grant';
import Red from '../components/Red';
import Sybil from '../components/Sybil';
import Right from '../assets/rightArrow.png';
import Left from '../assets/leftArrow.png';
import Up from '../assets/upArrow.png';
import Down from '../assets/downArrow.png';



function FirstPage() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  function Success() {
    alert('Mensagem enviada com sucesso')
  }

  return (
    <App>
      <div className="content">
        <img className="bg" src={background} alt=""/>
        <article className="navbar">
          <section>
            <img src={Logo} alt="Logo Icon"/>
            <h1>SuperGiantGames</h1>
          </section>
        </article>
       <div className="firstCard">
         <FirstCard />
       </div>
      </div>

      <div className="secondContent">
        <div className="down"></div>
        <img className="downArrow" src={Down} alt=""/>
        <div className="charac">
          <Grant />
          <Red />
          <Sybil />
        </div>
        <span className="arrow">
          <img className="left" src={Left} alt=""/>
          <img className="right" src={Right} alt=""/>
        </span>
      </div>

      <div className="thirdContent">
        <div className="bgc-form">
          <section>
            <h1>FORMULÁRIO</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            <form onSubmit={handleSubmit}>
              <input className="nome" type="text" placeholder="Nome" />
              <input className="email" type="text" placeholder="Email" />
              <textarea className="mensagem" type="text" placeholder="Mensagem" />
              <button onClick={() => Success()} type="submit" >enviar</button>
            </form>
          </section>
        </div>
      </div>

      <footer>
        <div className="swipe">
          <img className="up" src={Up} alt=""/>
        </div>
      </footer>
    </App>

  )
}

export default FirstPage;
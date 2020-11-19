import { App } from './styles';
import Logo from '../../assets/logo.png';
import FirstCard from '../FirstCard';
import Grant from '../Grant';
import Red from '../Red';
import Sybil from '../Sybil';
import Right from '../../assets/rightArrow.svg';
import Left from '../../assets/leftArrow.svg';


function FirstPage() {
  return (
    <App>
      <div className="content">
        <article className="navbar">
          <section>
            <img src={Logo} alt="Logo Icon"/>
            <h1>SuperGiantGames</h1>
          </section>
        </article>

       <div className="card">
         <FirstCard />
       </div>
      </div>

      <div className="secondContent">
        <div className="down"></div>
        <div className="charac">
          <Grant />
          <Red />
          <Sybil />
        </div>
      </div>

      <div className="thirdContent">
        <div className="bgc-form">
          <section>
            <h1>FORMULÁRIO</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            <form>
              <input className="nome" type="text" placeholder="Nome"/>
              <input className="email" type="text" placeholder="Email"/>
              <textarea className="mensagem" type="text" placeholder="Mensagem"/>
              <button type="submit">enviar</button>
            </form>
          </section>
        </div>
      </div>

      <footer>
        <div className="swipe"></div>
      </footer>
    </App>

  )
}

export default FirstPage;
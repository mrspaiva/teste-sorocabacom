import { App } from './styles';
import Logo from '../../assets/logo.png';
import Card from '../../assets/card.svg';
import imagemCard from '../../assets/imagemCard.png'

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

        <section className="card">
          <img className="cardBackground" src={Card} alt=""/>
          <div className="cardTitle">
            <h2>TRANSISTOR - RED THE SINGER</h2>
          </div>
          <img className="cardCharacter" src={imagemCard} alt=""/>
          <div className="cardContent">
            <p>
              "Olha, o que quer que você esteja pensando, me faça um favor, não solte."
            </p>
          </div>
        </section>
      </div>
    </App>
  )
}

export default FirstPage;
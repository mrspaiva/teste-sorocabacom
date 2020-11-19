import { App } from './styles';
import Card from '../../assets/card.svg';
import imagemCard from '../../assets/imagemCard.png';
import Pena1 from '../../assets/pena1.png';
import Pena2 from '../../assets/pena2.png';
import Pena3 from '../../assets/pena3.png';
import Pena4 from '../../assets/pena4.png';

function FirstCard() {
  return(
    <App>
          <img className="cardBackground" src={Card} alt=""/>
          <section className="card">
            <div className="cardTitle">
              <h2>TRANSISTOR - RED THE SINGER</h2>
            </div>
            <img className="cardCharacter" src={imagemCard} alt=""/>
            <img className="pena1" src={Pena1} alt=""/>
            <img className="pena2" src={Pena2} alt=""/>
            <img className="pena3" src={Pena3} alt=""/>
            <img className="pena4" src={Pena4} alt=""/>
            <div className="cardContent">
              <p>
                "Olha, o que quer que você esteja pensando, me faça um favor, não solte."
              </p>
            </div>
          </section>
    </App>
  )
}

export default FirstCard;


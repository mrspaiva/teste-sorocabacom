import { App } from './styles';
import Sybil from '../../assets/sybil.png';

function SybilCharacter() {
  return(
    <App>
       <article className="card">
            <div className="cardDescriptionSybil">
              <div className="cardCharacter">
                <img className="cardSybil" src={Sybil} alt=""/>
              </div>
              <span className="cardText">
                <p>Sybil é descrita pelo Transistor como sendo os "olhos e ouvidos" da Camerata.</p>
              </span>
            </div>
          </article>
    </App>
  )
}

export default SybilCharacter;
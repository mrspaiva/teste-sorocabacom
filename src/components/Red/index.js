import { App } from './styles';
import Red from '../../assets/red.png';

function RedCharacter() {
  return (
    <App>
      <article className="card">
            <div className="cardDescriptionRed">
              <div className="cardCharacter">
                <img className="cardRed" src={Red} alt=""/>
              </div>
              <span className="cardText">
                <p>Red, uma jovem cantora, entrou em posse do Transistor. Sendo a poderosa espada falante. O grupo Possessores quer tanto ela quanto o Transistor e está perseguindo implacavelmente a sua procura.</p>
              </span>
            </div>
          </article>
    </App>
  )
}

export default RedCharacter;
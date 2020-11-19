import { App } from './styles';
import Grant from '../../assets/grant.png';

function SecondPage() {
  return(
    <App>
          <article className="card">
            <div className="cardDescriptionGrant">
              <div className="cardCharacter">
                <img className="cardGrant" src={Grant} alt=""/>
              </div>
              <span className="cardText">
                <p>A Camerata foi apenas os dois no início, e suas fileiras nunca foram destinadas a exceder um número a ser contado em uma mão.</p>
              </span>
            </div>
          </article>

    </App>
  )
}

export default SecondPage;
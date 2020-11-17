import { Content } from './styles';
import Logo from '../../assets/logo.png';
import Card from '../../assets/card.svg'

function FirstPage() {
  return (
      <Content>
        <article className="navbar">
          <section>
            <img src={Logo} alt="Logo Icon"/>
            <h1>SuperGiantGames</h1>
          </section>
        </article>

        <section className="card">
          <img src={Card} alt=""/>
        </section>
      </Content>
  )
}

export default FirstPage;
import { Header } from '../../Components/Header'
import { Button } from '../../Components/Button'
import {FiPlus} from 'react-icons/fi'

import {Container, Title, Content, Card} from './styles.js'

export function Home(){
  return(
    <Container>
      <Header name={'Guilherme Baioni'}/>
      <Title>
        <div>
          <h2>Meus filmes</h2>
          <Button icon={FiPlus} title={'Adicionar filme'}/>
        </div>
      </Title>
      <Content>
        <Card>
          <h2>Interestellar</h2>
          <div>
            <img src="../../public/starts_card.svg" alt="" />
          </div>
          <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma</p>
        </Card>
        <Card>
          <h2>Interestellar</h2>
          <div>
            <img src="../../public/starts_card.svg" alt="" />
          </div>
          <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma</p>
        </Card>
        <Card>
          <h2>Interestellar</h2>
          <div>
            <img src="../../public/starts_card.svg" alt="" />
          </div>
          <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma</p>
        </Card>
        <Card>
          <h2>Interestellar</h2>
          <div>
            <img src="../../public/starts_card.svg" alt="" />
          </div>
          <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma</p>
        </Card>
      </Content>
    </Container>
  )
}
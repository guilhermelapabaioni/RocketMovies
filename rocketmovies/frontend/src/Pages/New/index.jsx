import {FiArrowLeft, FiPlus, FiX} from 'react-icons/fi'

import {Header} from '../../Components/Header'
import {ButtonText} from '../../Components/ButtonText'
import {Input} from '../../Components/Input'
import {Button} from '../../Components/Button'

import { Container, Content } from "../New/styles.js"

export function New(){

  return(
    <Container>
      <Header name={'Guilherme Baioni'}/>
      <Content>
        <ButtonText icon={FiArrowLeft} title={'Voltar'}/>
        <h2>Novo filme</h2>
        <div>
          <Input placeholder={'Título'}/>
          <Input placeholder={'Sua nota (de 0 a 5)'}/>
        </div>
        <textarea name="" id="" cols="30" rows="10" placeholder='Observações'/>
        <h2>Marcadores</h2>
        <div className='marcadores'>
          <div>
            <p>React</p>
            <button><FiX/></button>
          </div>
          <div>
            <p>Novo marcador</p>
            <button><FiPlus/></button>
          </div>
        </div>
        <div>
          <button className='deleteMovies'>Excluir Filmes</button>
          <Button title={'Salvar alterações'}/>
        </div>
      </Content>
    </Container>
  )
}
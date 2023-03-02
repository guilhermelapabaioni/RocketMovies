import {FiArrowLeft, FiLock, FiMail, FiUser, FiCamera} from 'react-icons/fi'
import {ButtonText} from '../../Components/ButtonText'
import {Input} from '../../Components/Input'
import {Button} from '../../Components/Button'

import {Header, Container, Content} from './styles'


export function Profile(){
  return(
    <Container>
      <Header>
        <ButtonText icon={FiArrowLeft} title={'Voltar'}/>
      </Header>
      <Content>
        <div>
          <span><FiCamera/></span>
          <img src="https://github.com/guilhermelapabaioni.png" alt=""/>
        </div>
        <div>
          <Input icon={FiUser} placeholder='Nome'/>
          <Input icon={FiMail} placeholder='E-mail'/>
        </div>
        <div>
          <Input icon={FiLock} placeholder='Senha atual'/>
          <Input icon={FiLock} placeholder='Nova senha'/>
        </div>
        <Button title={'Salvar'}/>
      </Content>
    </Container>
  )
}
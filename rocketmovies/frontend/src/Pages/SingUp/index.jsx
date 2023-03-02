import {FiUser, FiMail, FiLock, FiArrowLeft} from 'react-icons/fi'

import {Link} from 'react-router-dom'
import {Input} from '../../Components/Input'
import {Button} from '../../Components/Button'
import {ButtonText} from '../../Components/ButtonText'

import {Container, Form, Background} from './styles'

export function SingUp(){
  return(
    <Container>
      <Background/>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicações para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>
        <Input type='text' icon={FiUser} placeholder='Nome'/>
        <Input type='email' icon={FiMail} placeholder='E-mail'/>
        <Input type='password' icon={FiLock} placeholder='Senha'/>
        <Button title={'Cadastrar'}/>
        <Link to='/'><ButtonText icon={FiArrowLeft} title={'Login'}/></Link>
      </Form>
    </Container>
  )
}
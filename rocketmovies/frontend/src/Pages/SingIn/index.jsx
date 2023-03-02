import { FiMail, FiLock } from 'react-icons/fi'

import {Link} from 'react-router-dom'
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'

import { Container, Form, Background } from './styles'

export function SingIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
        <Input type="email" icon={FiMail} placeholder="E-mail" />
        <Input type="password" icon={FiLock} placeholder="Senha" />
        <Button title={'Entrar'} />
        <Link to="/register"><ButtonText title={'Criar conta'}/></Link>
      </Form>
      <Background />
    </Container>
  )
}

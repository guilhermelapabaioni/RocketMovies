import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

import { Link } from 'react-router-dom'
import { Input } from '../../Components/Input'
import { FiMail, FiLock } from 'react-icons/fi'
import { Button } from '../../components/Button'

import { Container, Form, InputContent, Background } from './styles'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  // document.addEventListener('keyup', event => {
  //   if (event.key === 'Enter') {
  //     const signInButton = document.querySelector('#signInButton')
  //     signInButton.click()
  //   }
  // })

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus filmes.</p>
        <h2>Faça seu login</h2>
        <InputContent>
          <Input
            type="email"
            placeholder="E-mail"
            icon={FiMail}
            onChange={event => setEmail(event.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            icon={FiLock}
            onChange={event => setPassword(event.target.value)}
          />
          <Button id="signInButton" title={'Entrar'} onClick={handleSignIn} />
        </InputContent>
        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  )
}

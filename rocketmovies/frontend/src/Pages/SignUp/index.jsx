import { useState } from 'react'
import { api } from '../../services/api'

import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi'

import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'

import { Container, Background, Form, InputContent } from './styles'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSignUp() {
    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Usuário criado com sucesso!')
        navigate('/')
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Não foi possível cadastrar.')
        }
      })
  }

  // document.addEventListener('keyup', event => {
  //   if (event.key === 'Enter') {
  //     const signUpButton = document.querySelector('#signUpButton')
  //     signUpButton.click()
  //   }
  // })

  return (
    <Container>
      <Background />
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicações para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>
        <InputContent>
          <Input
            type="text"
            icon={FiUser}
            placeholder="Nome"
            onChange={event => setName(event.target.value)}
          />
          <Input
            type="email"
            icon={FiMail}
            placeholder="E-mail"
            onChange={event => setEmail(event.target.value)}
          />
          <Input
            type="password"
            icon={FiLock}
            placeholder="Senha"
            onChange={event => setPassword(event.target.value)}
          />
          <Button
            title={'Cadastrar'}
            onClick={handleSignUp}
            id="signUpButton"
          />
          <Link to="/">
            <ButtonText icon={FiArrowLeft} title={'Login'} />
          </Link>
        </InputContent>
      </Form>
    </Container>
  )
}

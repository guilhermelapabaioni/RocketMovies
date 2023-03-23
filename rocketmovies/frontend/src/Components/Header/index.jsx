import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Input } from '../Input/'
import { Container, Profile } from './styles'

export function Header({children}) {
  const { signOut, user } = useAuth()

  const navigate = useNavigate()

  function handleSignOut() {
    signOut()
  }

  function goProfile() {
    navigate('/profile')
  }

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  return (
    <Container>
      <h1>RocketMovies</h1>
      {children}
      <Profile>
        <div>
          <p>{user.name}</p>
          <Link href="/" onClick={handleSignOut}>
            Sair
          </Link>
        </div>
        <button onClick={goProfile}>
          <img src={avatarURL} alt={'Foto do usuário' + user.name} />
        </button>
      </Profile>
    </Container>
  )
}

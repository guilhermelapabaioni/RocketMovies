import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Link } from 'react-router-dom'

import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from 'react-icons/fi'
import { ButtonText } from '../../Components/ButtonText'
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'

import { Container, Form, Avatar } from './styles'

export function Profile() {
  const { user, updateProfile } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  
  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarURL)
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()

  async function handleUpdate() {
    const updated = {
      name,
      email,
      oldPassword,
      newPassword
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  document.addEventListener('keyup', event => {
    if (event.key === 13) {
      event.preventDefault()
      const updateProfileButton = document.querySelector('#updateProfileButton')
      updateProfileButton.click()
    }
  })

  return (
    <Container>
      <header>
        <Link to="/">
          <ButtonText icon={FiArrowLeft} title={'Voltar'} />
        </Link>
      </header>
      <Avatar>
        <img src={avatar} alt={'Foto do usuário' + user.name} />
        <label htmlFor="avatar">
          <FiCamera />
          <input id="avatar" type="file" onChange={handleChangeAvatar}/>
        </label>
      </Avatar>
      <Form>
        <Input
          type="text"
          icon={FiUser}
          placeholder={user.name}
          onChange={event => setName(event.target.value)}
        />
        <Input
          type="email"
          icon={FiMail}
          placeholder={user.email}
          onChange={event => setEmail(event.target.value)}
        />

        <Input
          type="password"
          icon={FiLock}
          placeholder="Senha atual"
          onChange={event => setOldPassword(event.target.value)}
        />
        <Input
          type="password"
          icon={FiLock}
          placeholder="Nova senha"
          onChange={event => setNewPassword(event.target.value)}
        />
        <Button
          id="updateProfileButton"
          title={'Salvar'}
          to="/profile"
          onClick={handleUpdate}
        />
      </Form>
    </Container>
  )
}

import { FiArrowLeft, FiClock } from 'react-icons/fi'
import { AiFillEdit } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'
import { validateGrade } from '../../services/functions'

import { Header } from '../../Components/Header'
import { ButtonText } from '../../Components/ButtonText'
import { Input } from '../../Components/Input'
import { TextArea } from '../../Components/TextArea'
import { Link } from '../../Components/Link'

import { Container, Content, Title, MovieTitle } from './styles'

export function Movie() {
  const { user } = useAuth()
  const [data, setData] = useState(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  const params = useParams(null)
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${params.id}`)
      setData(response.data)
    }

    fetchMovie()
  }, [])

  let counter = Number()

  async function handleEditMovie() {
    if (counter === 0) {
      counter++
      document.getElementById('description').disabled = false
      document.getElementById('inputTitle').disabled = false
      document.getElementById('buttonDelete').classList.add('disabled')
      document.getElementById('buttonSave').classList.remove('disabled')
      return
    }

    if (counter === 1) {
      counter--
      document.getElementById('description').disabled = true
      document.getElementById('inputTitle').disabled = true
      document.getElementById('buttonDelete').classList.remove('disabled')
      document.getElementById('buttonSave').classList.add('disabled')
      return
    }
  }

  async function handleUpdateMovie() {
    await api.put(`/movies/${params.id}`, { title, description })
    alert('Movie updated successfully')
    counter = 1
    handleEditMovie()
  }

  async function handleDeleteMovie() {
    await api.delete(`/movies/${params.id}`)
    alert('Movie has been deleted with success.')
    navigate('/')
  }

  return (
    <Container>
      <Header >
        <div></div>
      </Header>
      {data && (
        <Content>
          <div>
            <ButtonText icon={FiArrowLeft} title="Voltar" href="/" />
            <ButtonText icon={AiFillEdit} size="40" onClick={handleEditMovie} />
          </div>
          <Title>
            <input
              defaultValue={data.title}
              disabled
              id="inputTitle"
              onChange={event => setTitle(event.target.value)}
            />
            <div>{validateGrade(data.grade)}</div>
          </Title>
          <MovieTitle>
            <div>
              <img src={avatarURL} alt={`Image from user ${user.name}`} />
              <p>Por {user.name}</p>
            </div>
            <div>
              <ButtonText icon={FiClock} />
              <p>{data.created_at}</p>
            </div>
          </MovieTitle>
          {data.links && (
            <div>
              {data.links.map(link => (
                <Link
                  key={link.id}
                  title={link.url}
                  to={link.url}
                  target="_blank"
                />
              ))}
            </div>
          )}
          <TextArea
            placeholder="Observações"
            onChange={event => setDescription(event.target.value)}
            defaultValue={data.description}
            disabled
            id="description"
          />
          <button onClick={handleDeleteMovie} id="buttonDelete">
            Excluir
          </button>
          <button onClick={handleUpdateMovie} id="buttonSave" class="disabled">
            Salvar
          </button>
        </Content>
      )}
    </Container>
  )
}

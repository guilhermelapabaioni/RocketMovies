import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { api } from '../../services/api'

import { Header } from '../../Components/Header'
import { ButtonText } from '../../Components/ButtonText'
import { Section } from '../../Components/Section'
import { MovieItem } from '../../Components/MovieItem'
import { TextArea } from '../../Components/TextArea'
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'

import { Container, Form } from '../New/styles.js'

export function New() {
  const [title, setTitle] = useState('')
  const [grade, setGrade] = useState('')
  const [description, setDescription] = useState('')

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')

  const navigate = useNavigate()

  function handleAddLink() {
    if (newLink === '') {
      return alert('Link empty.')
    } else {
      setLinks(prevState => [...prevState, newLink])
      setNewLink('')
    }
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  async function handleNewNote() {
    if (!title) {
      return alert('Please insert movie title')
    } else if (!grade || grade > 5) {
      return alert('Please insert movie grade')
    }

    await api.post(`/movies`, { title, grade, description, links })

    alert('Nota criada com sucesso!')
    navigate('/')
  }

  return (
    <Container>
      <Header />
      <Form>
        <Link to="/">
          <ButtonText icon={FiArrowLeft} title={'Voltar'} />
        </Link>
        <Section title="Novo Filme">
          <Input
            placeholder={'Título'}
            onChange={event => setTitle(event.target.value)}
          />
          <Input
            placeholder={'Sua nota (de 0 a 5)'}
            onChange={event => setGrade(event.target.value)}
          />
        </Section>
        <TextArea
          placeholder="Observações"
          onChange={event => setDescription(event.target.value)}
        />
        <Section title="Links">
          <MovieItem
            isNew
            placeholder="Novo Link"
            value={newLink}
            onChange={event => setNewLink(event.target.value)}
            onClick={handleAddLink}
          />
          {links.map((link, index) => (
            <MovieItem
              key={String(index)}
              value={link}
              onClick={() => handleRemoveLink(link)}
            />
          ))}
        </Section>
        <div>
          <Button title={'Salvar alterações'} onClick={handleNewNote} />
        </div>
      </Form>
    </Container>
  )
}

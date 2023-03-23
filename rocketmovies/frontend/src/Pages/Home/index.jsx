import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { useQuery } from 'react-query'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'

import { Header } from '../../Components/Header'
import { Input } from '../../Components/Input'
import { FiPlus } from 'react-icons/fi'
import { Movies } from '../../Components/Movies'

import { Container, Tittle, Content, NewMovie } from './styles.js'

export function Home() {
  const [links, setLinks] = useState([])
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])

  const navigate = useNavigate()

  function handleMovieDetails(id) {
    navigate(`/movies/${id}`)
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies?title=${search}`)
      setMovies(response.data)
    }

    fetchMovies()
  }, [search])

  useEffect(() => {
    async function fetchLinks() {
      const response = await api.get('/links')
      setLinks(response.data)
    }
    fetchLinks()
  }, [])

  // // const fetchMovies = async () => {
  // //   const response = await api.get(`/movies/${user.id}`)
  // //   return response.data
  // // }

  // // const getMoviesQuery = useQuery('movies', () => fetchMovies(), {
  // //   onSuccess: data => {
  // //     setMovies(data)
  // //   }
  // // })

  // if (getMoviesQuery.isLoading) return <div>Loading...</div>

  return (
    <Container>
      <Header>
        <Input
          placeholder="Pesquise pelo título."
          onChange={event => setSearch(event.target.value)}
        />
      </Header>
      <Tittle>
        <div>
          <h2>Meus filmes</h2>
          <NewMovie to="/new">
            <FiPlus />
            Adicionar Filme
          </NewMovie>
        </div>
      </Tittle>
      <Content>
        {movies.map(movie => (
          <Movies
            key={movie.id}
            data={movie}
            onClick={() => handleMovieDetails(movie.id)}
          />
        ))}
      </Content>
    </Container>
  )
}

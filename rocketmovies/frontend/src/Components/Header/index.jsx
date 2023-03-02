import {Input} from '../Input/'

import {Container, Profile} from './styles'

export function Header({name}){
  return(
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder='Pesquise pelo título.'/>
      <Profile>
        <div>
          <p>
            {name}
          </p>
          <a href="/">Sair</a>
        </div>
        <img src="https://github.com/guilhermelapabaioni.png" alt="" />
      </Profile>
    </Container>
  )
}
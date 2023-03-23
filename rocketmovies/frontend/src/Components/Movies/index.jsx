import {validateGrade} from '../../services/functions'

import { Link } from '../Link'
import { Content } from './styles'

export function Movies({ data, ...rest }) {
  // const arrayRenderMovies = (amountOfDivs, content) => {
  //   const array = []
  //   for (let i = 0; i < amountOfDivs; i++) {
  //     array.push(<img key={i} />)
  //     return array.map(img => img)
  //   }
  // }  

  return (
    <Content {...rest} to="/movies">
      <h1>{data.title}</h1>
      <div>{validateGrade(data.grade)}</div>
      {data.links && (
        <div>
          {data.links.map(link => (
            <Link key={link.id} title={link.url} to={link.url} target='_blank'/>
          ))}
        </div>
      )}
    </Content>
  )
}

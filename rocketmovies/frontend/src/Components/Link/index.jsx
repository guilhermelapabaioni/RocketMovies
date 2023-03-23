import { Container } from './styles'

export function Link({ title,   ...rest }) {
  return <Container {...rest}>{title}</Container>
}

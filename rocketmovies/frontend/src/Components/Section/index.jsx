import { Container } from '../Section/styles'

export function Section({ title, value, children, ...rest }) {
  return (
    <Container {...rest}>
      <h2>{title}</h2>
      <div>{children}</div>
    </Container>
  )
}

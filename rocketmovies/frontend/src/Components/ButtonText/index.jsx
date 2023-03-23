import { Container } from "./styles";

export function ButtonText({title, icon: Icon, size,...rest}){
  return (
    <Container {...rest}>
      {Icon && <Icon size={size ?? 20}/>}
      {title}
    </Container>
  )
}
import styled from "styled-components";

export const Container = styled.a`
  color: ${({theme}) => theme.COLORS.pink};
  font-size: 1.8rem;
  
  display: flex;
  align-items: center;
  gap: .4rem;
`
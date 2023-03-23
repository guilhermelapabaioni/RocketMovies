import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  gap: 2rem;

  >h2{
    border-bottom: solid 1px ${({ theme }) => theme.COLORS.header_border_bottom};
    padding-bottom: .5rem;
  }

  >div{
    display: flex;
    gap: 2rem;
    
  }
`
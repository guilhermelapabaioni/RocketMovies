import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 30rem;

    background: ${({ theme }) => theme.COLORS.background_input};
    padding: 1rem;
    border-radius: 0.6rem;
    border: none;
    color: ${({ theme }) => theme.COLORS.white};
    resize: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.gray};
    }
  
  > .active{
    
  }
`
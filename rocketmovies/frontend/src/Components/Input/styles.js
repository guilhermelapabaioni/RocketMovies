import styled from 'styled-components'

export const Container = styled.div`
  background: ${({theme}) => theme.COLORS.background_input};

  width: 100%;
  padding: 1rem;

  display: flex;
  gap: 1rem;

  border-radius: .6rem;

  > input{
    background: ${({theme}) => theme.COLORS.background_input};
    width: 100%;

    border: none;
    color: ${({theme}) => theme.COLORS.white};
    font-weight: 500;
  }

  &::placeholder{
    color: ${({theme}) => theme.COLORS.gray};
  }
`
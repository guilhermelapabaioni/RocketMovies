import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.background_input};

  width: 100%;
  padding: 2rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  border-radius: .6rem;

  > input{
    background: ${({ theme }) => theme.COLORS.background_input};
    width: 100%;

    font-size: 2rem;
    border: none;
    color: ${({ theme }) => theme.COLORS.white};
    font-weight: 500;
  }

  &::placeholder{
    color: ${({ theme }) => theme.COLORS.gray};
  }

  > svg{
    width: 3rem;
    height: 2.6rem;
  }
`
import styled from 'styled-components'

export const Container = styled.button`
  background: ${({ theme }) => theme.COLORS.pink};
  border: none;
  border-radius: .6rem;
  width: 100%;
  
  padding: 1.6rem;

  font-size: 1.8rem;
  font-weight: 500;

  display: flex;
  justify-content: center;
  gap: 0.6rem;

  color: ${({ theme }) => theme.COLORS.white};
`
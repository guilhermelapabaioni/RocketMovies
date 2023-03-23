import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`

export const Tittle = styled.div`
  width: 100rem;
  margin: 0 auto;
  margin-block: 4rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    border-bottom: solid 1px ${({ theme }) => theme.COLORS.header_border_bottom};
    position: relative;

    > h2 {
      font-weight: 400;
      font-size: 3.2rem;
      line-height: 4.2rem;
    }
  }
`

export const NewMovie = styled(Link)`
  background: ${({ theme }) => theme.COLORS.pink};
  border: none;
  border-radius: .6rem;

  padding: 2rem;

  font-size: 2rem;
  font-weight: 500;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: .8rem;

  color: ${({ theme }) => theme.COLORS.white};

  >svg{
    height: 3rem;
    width: 3rem;
  }
`

export const Content = styled.div`
  width: 100rem;
  margin: 0 auto;
  margin-bottom: 4rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  overflow-y: auto;
`

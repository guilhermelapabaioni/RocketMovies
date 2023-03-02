import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  width: 100rem;
  margin: 0 auto;
  margin-block: 4rem;

  > div {
    display: flex;
    justify-content: space-between;
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

export const Content = styled.div`
  width: 100rem;
  margin: 0 auto;
  margin-bottom: 4rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  overflow-y: auto;
`

export const Card = styled.div`
  margin-bottom: 2rem;
  background: ${({ theme }) => theme.COLORS.card};
  padding: 2rem;
  border-radius: 0.6rem;
  margin-right: .6rem;
`

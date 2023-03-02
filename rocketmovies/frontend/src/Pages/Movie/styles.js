import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`

export const Content = styled.div`
  width: clamp(32rem, 75vw, 112rem);
  height: 80vh;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-y: auto;

  > div {
    display: flex;
    gap: 1rem;
    align-items: center;

    > h2 {
      font-weight: 400;
      font-size: 2.4rem;
    }

    .user {
      width: 28px;
      height: 28px;
      border-radius: 100%;
    }

    > p {
      font-size: 1.4rem;
    }
  }
`

export const Cards = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 2rem;
`

export const Card = styled.div`
  background: ${({theme}) => theme.COLORS.background_tag};
  padding: .6rem;
  border-radius: .6rem;

  color: ${({theme}) => theme.COLORS.gray_200};
  font-size: 1.4rem;
`

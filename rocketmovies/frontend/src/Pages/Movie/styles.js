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
  gap: 2rem;

  overflow-y: auto;

  >div:nth-child(1) {
    display: flex;
    justify-content: space-between;
  }

  >button{
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
  }

  > .disabled {
    display: none;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  > input{
    background: ${({ theme }) => theme.COLORS.background_input};
    padding: 2rem;
    border-radius: .6rem;
    font-size: 2rem;
    border: none;
    color: ${({ theme }) => theme.COLORS.white};
    font-weight: 500;

    &::placeholder{
    color: ${({ theme }) => theme.COLORS.gray};
    }
  }
`

export const MovieTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  > div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 1rem;

  > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    }
  }

  >div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
`

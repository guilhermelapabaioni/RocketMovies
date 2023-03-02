import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > * h2 {
    border-bottom: solid 1px ${({ theme }) => theme.COLORS.header_border_bottom};
    padding-bottom: 0.6rem;
  }
`

export const Content = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
  padding: 2rem;

  width: clamp(32rem, 75vw, 112rem);

  display: flex;
  flex-direction: column;
  gap: 2rem;

  > div {
    display: flex;
    gap: 6rem;
  }

  > textarea {
    background: ${({ theme }) => theme.COLORS.background_input};
    padding: 1rem;
    border-radius: 0.6rem;
    border: none;
    color: ${({ theme }) => theme.COLORS.white};
    resize: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.gray};
    }
  }

  > .marcadores {
    background-color: #0d0c0f;
    padding: 2rem;
    border-radius: 0.6rem;
    display: flex;
    align-items: center;
    gap: 1.2rem;

    > div {
      display: flex;
      gap: 0.6rem;

      padding: 1rem;
    }

    > div:nth-child(1) {
      background: ${({ theme }) => theme.COLORS.background_tag};
      border-radius: 0.6rem;
    }

    > div:nth-child(2) {
      border: dashed 2px white;
      border-radius: 0.6rem;
      color: ${({ theme }) => theme.COLORS.gray_200};
    }

    > div button {
      display: flex;
      align-items: center;
      text-align: center;

      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.pink};

      > svg {
        font-size: 2.2rem;
        font-weight: bold;
      }
    }
  }

  > div .deleteMovies {
    width: 100%;
    background: #0d0c0f;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 0.6rem;

    color: ${({ theme }) => theme.COLORS.pink};

    padding: 0.8rem;

    font-size: 1.8rem;
    font-weight: 500;
  }
`

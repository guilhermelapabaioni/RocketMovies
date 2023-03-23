import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;
    background: ${({ theme }) => theme.COLORS.background_900};

    display: flex;
    align-items: center;

    padding: 0 4rem;
    font-size: 2.4rem;
  }

  > svg {
      color: ${({ theme }) => theme.COLORS.gray_100};
      font-size: 2.4rem;
    }
`

export const Avatar = styled.div`
  position: relative;
  margin: -92px auto 32px;
  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;
    background: ${({ theme }) => theme.COLORS.pink};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  label:hover {
    transition: .5s;
    background: ${({ theme }) => theme.COLORS.white};
    color: ${({ theme }) => theme.COLORS.orange}
  }
`

export const Form = styled.form`
  width: clamp(32rem, 75vw, 42rem);
  margin: 6rem auto;
  
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div:nth-child(3){
    margin-top: 2rem;
  }

`

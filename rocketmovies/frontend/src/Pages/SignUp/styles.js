import styled from "styled-components";
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
`

export const Background = styled.div`
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
  flex: 1;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 4rem;

  > h1{
    color: ${({ theme }) => theme.COLORS.pink};
    font-size: 4rem;
  }

  > p{
    color: ${({ theme }) => theme.COLORS.gray_200};
    font-size: 2rem;
  }

  > h2{
    margin-block: 2rem;
    color: ${({ theme }) => theme.COLORS.white};
    font-size: 2.8rem;
  }

  > a{
    font-size: 2rem;
    margin-top: 2rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.pink};
  }

`

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`




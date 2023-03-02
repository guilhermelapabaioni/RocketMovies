import styled from "styled-components";
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  padding: 0 4rem;

  > h1{
    color: ${({theme}) => theme.COLORS.pink};
  }

  > p{
    color: ${({theme}) => theme.COLORS.gray_200};
    font-size: 1.4rem;
  }

  > h2{
    margin: 2rem 0;
    color: ${({theme}) => theme.COLORS.white};
  }

  > a{
    margin-top: 2rem;
    text-align: center;
    color: ${({theme}) => theme.COLORS.pink};
  }

`

export const Background = styled.div`
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
  flex: 1;
`
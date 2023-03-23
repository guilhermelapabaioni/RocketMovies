import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  

  padding: 2rem 2rem;

  border-bottom: solid 1px ${({theme}) => theme.COLORS.header_border_bottom};

  > h1{
    color: ${({theme}) => theme.COLORS.pink};
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
  }


`

export const Profile = styled.div`
  display: flex;
  text-align: end;
  justify-content: end;
  gap: 2rem;

  > div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 2rem;
  }

  >div a {
    color: ${({theme}) => theme.COLORS.gray_200};
  }

  >button {
    background: none;
    border: none;
    border-radius: 50%;
  }

  > button img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`
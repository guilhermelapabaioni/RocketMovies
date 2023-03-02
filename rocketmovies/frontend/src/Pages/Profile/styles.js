import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

`

export const Header = styled.div`
  background: ${({theme}) => theme.COLORS.card};
  height: 10%;
  width: 100%;
  position: absolute;

  display: flex;

  padding: 2rem;
`

export const Content = styled.div`
  margin: 0 auto;
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  

  > div img{
    width: 164px;
    height: 164px;
    border-radius: 50%;
  }

  > div span{
    background: ${({theme}) => theme.COLORS.pink};
    width: 41px;
    height: 41px;
    border-radius: 50%;
    
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 140px;
    right: 670px;
  }

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  > div:nth-child(3) {
    margin-top: 4rem;
  }
`

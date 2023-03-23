import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`

export const Form = styled.form`
  margin: 0 auto;
  margin-top: 1rem;
  padding: 2rem;

  width: clamp(32rem, 75vw, 112rem);

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

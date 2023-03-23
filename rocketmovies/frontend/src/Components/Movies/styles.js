import styled from "styled-components";

export const Content = styled.button`
  margin-bottom: 2rem;
  background: ${({ theme }) => theme.COLORS.card};
  padding: 2rem;
  border-radius: 0.6rem;
  border: none;
  margin-right: .6rem;
  color: #fffff1;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
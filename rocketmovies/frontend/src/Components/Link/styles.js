import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  font-size: 1.8rem;
  padding: 0.8rem 1.4rem;
  border-radius: 0.5rem;
  margin-right: 0.6rem;
  background: ${({ theme }) => theme.COLORS.pink};
  color: ${({ theme }) => theme.COLORS.white};
`
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.background_input};

  color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.gray_200};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.gray_200}` : 'none'};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.white};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.pink};
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;
    color: ${({ theme }) => theme.COLORS.white};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.gray_100};
    }
  }
`

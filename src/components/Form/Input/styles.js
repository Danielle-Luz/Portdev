import styled from "styled-components";
import { Input } from ".";

export const FieldStyled = styled(Input)`
  background-color: ${({ theme }) => theme.colors.greyScale[2]};

  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radius};

  color: ${({ theme }) => theme.colors.greyScale[0]};

  font-size: ${({ theme }) => theme.fontSizes[1]}px;

  padding: 10.5px 16.2px;

  width: 100%;

  &:focus {
    border-color: ${({ theme }) => theme.colors.greyScale[0]};
  }

  &:placeholder {
    color: ${({ theme }) => theme.colors.greyScale[1]};
  }
`;

export const InputWrapper = styled.article`
  label {
    margin-bottom: 22px;
  }

  option {
    background-color: ${({ theme }) => theme.colors.greyScale[2]};
    color: ${({ theme }) => theme.colors.greyScale[0]};
  }
`;

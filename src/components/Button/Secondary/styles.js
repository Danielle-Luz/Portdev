import styled from "styled-components";

import { Button } from "../styles";

export const ButtonSecondaryStyled = styled(Button)`
  background-color: ${({ theme }) => theme.colors.greyScale[3]};

  align-items: center;
  display: flex;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSizes[3]};

  padding: 12px ${({ icon }) => !icon && "17px"};

  &:focus {
    background-color: ${({ theme }) => theme.colors.greyScale[2]};
  }
`;

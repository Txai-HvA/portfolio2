import styled from "styled-components";

import { primaryButtonColor, primaryButtonTextColor, primaryButtonHoverColor, primaryButtonHoverTextColor, headerBackgroundColor, headerHeight } from "../variables";

export const HeaderWrapper = styled.header`
  display: flex;
  background-color: ${headerBackgroundColor};
  width: 100%;
  height: ${headerHeight};
  justify-content: flex-end;//
`;

export const HeaderList = styled.ul`
  list-style: none;
  display: flex;
  height: ${headerHeight};
  margin-top: 0;
  padding: 0;
`

export const HeaderListItem = styled.li`

`

export const HeaderLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${primaryButtonTextColor};
  background-color: ${primaryButtonColor};
  height: ${headerHeight};
  padding: 0 20px;
  font-weight: bold;

  &:hover {
    color: ${primaryButtonHoverTextColor};
    background-color: ${primaryButtonHoverColor};
  }
`
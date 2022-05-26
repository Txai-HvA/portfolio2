import styled from "styled-components";

import {
  primaryButtonColor,
  primaryButtonTextColor,
  primaryButtonHoverColor,
  primaryButtonHoverTextColor,
  headerBackgroundColor,
  headerHeight,
  logoURL,
  logoSmallURL
} from "../variables";

export const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  height: ${headerHeight};
  justify-content: space-between;
`;

export const HeaderList = styled.ul`
  list-style: none;
  display: flex;
  height: ${headerHeight};
  margin-top: 0;
  padding: 0;
`

export const HeaderListItem = styled.li`
  display: flex;
  background-color: ${primaryButtonColor};
  height: ${headerHeight};
  font-weight: bold;
  min-width: 64px;

  &:hover {
    color: ${primaryButtonHoverTextColor};
    background-color: ${primaryButtonHoverColor};
    transition: 1s;
  }

  &:visited {
    color: none;
  }

  &:nth-of-type(2) {
    margin-left: 10px;
  }

  a {
    color: ${primaryButtonTextColor};
    display: flex;
    width: 100%;
    height: 100%;
    text-decoration: none;
    align-items: center;
    padding: 0 20px;
  }
`

export const Logo = styled.image`
  background-image: url(${logoURL});
  background-size: contain;
  background-repeat: no-repeat;
  height: ${headerHeight};
  width: 267px;
  display: flex;

  @media (max-width: 440px) {
    background-image: url(${logoSmallURL});
}
`;


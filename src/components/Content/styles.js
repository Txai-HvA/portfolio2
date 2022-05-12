import styled from "styled-components";
import { primaryBackgroundColor } from "../variables";

export const ContentWrapper = styled.main`
  display: flex;
  background-color: ${primaryBackgroundColor};
  padding: 15px;
`;

export const ContentList = styled.ul`
  flex-direction: column;
  list-style: none;
  display: flex;
  margin-top: 0;
  padding: 0;
  width: 100%;



  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

export const ContentListItem = styled.li`
  display: inline-block;
  margin-bottom: 15px;
  
  @media (min-width: 768px) {
    width: 49%;
  }
`
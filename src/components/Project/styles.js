import styled from "styled-components";
import {
    secondaryButtonColor,
    secondaryButtonTextColor,
    secondaryButtonTextHoverColor,
    secondaryBackgroundColor,
    secondaryButtonBorderColor,
    secondaryButtonBorderHoverColor,
    articleTextColor,
    headingColor
} from "../variables";

export const Article = styled.article`
    text-align: left;
    margin: 20px 0;
    padding: 15px 10%;
    background-color: ${secondaryBackgroundColor}; 
`;

export const H1 = styled.h1`
    font-size: 2em;
    color: ${headingColor};
`;

export const H2 = styled.h2`
    font-size: 1.5em;
    color: ${headingColor};
`;

export const P = styled.p`
    font-size: 1;
    font-weight: 500;
    color: ${articleTextColor};
`;

export const Link = styled.a`
    display: block;
    text-decoration: none;
    width: 100%;
    text-align: center;
    padding: 15px 0;
    margin-bottom: 10px;
    color: ${secondaryButtonTextColor};
    border: 4px solid ${secondaryButtonBorderColor};
    background-color: ${secondaryButtonColor};
    font-weight: bold;
    box-sizing: border-box; 
    transition: 1s;

    &:hover {
        color: ${secondaryButtonTextHoverColor};
        border: 4px solid ${secondaryButtonBorderHoverColor};
    }
`;

export const IconList = styled.ul`
    list-style: none;
    display: flex;
    margin-left: -40px;
`

export const IconItem = styled.li`
    margin-right: 10px;
    img {
        width: 50px;
    }
`

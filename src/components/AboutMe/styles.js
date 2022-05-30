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

export const P = styled.p`
    font-size: 1;
    font-weight: 500;
    color: ${articleTextColor};

    a {
        text-decoration: none;
        color: ${secondaryButtonTextColor};

        &:hover {
            color: ${secondaryButtonTextHoverColor};
        }
    }

`;

export const PBold = styled.p`
    font-size: 1;
    font-weight: bold;
    color: ${articleTextColor};
`;

export const InfoWrapper = styled.div`
    display: flex;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 10px;
    }
`

export const TextWrapper = styled.div`
`

export const Photo = styled.img`
    width: 200px;
    height: 200px;
    margin-left: 20px;

    @media (max-width: 768px) {
        margin: auto;
        width: 200px;
        height: 200px;
    }
`

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

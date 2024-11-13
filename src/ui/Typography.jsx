import styled from "styled-components";



const TitleH1 = styled.h1 `
    font-family: Urbanist;
    font-size: 2.5;
    font-weight: 700;
    line-height: normal;
    font-style: normal;
    margin: 0;
    padding: 0;

    @media screen and (min-width: 768px) {
        font-size: 3rem;
    }
`;

const TitleH2 = styled.h2 `
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
    font-weight: 700;
    line-height: normal;
    font-style: normal;

    @media screen and (min-width: 768px) {
        font-size: 2.4rem;
    }
`;

const TitleH3 = styled.h3 `
    font-family: Poppins;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
    padding: 0;

    @media screen and (min-width: 768px) {
        font-size: 2rem;
    }
`;

const BodyP = styled.p `
    font-family: Poppins;
    font-size: 0.prem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    padding: 0;

    @media screen and (min-width: 768px) {
        font-size: 1rem;
    }
`;



export const H1 = ({ heading }) => <TitleH1>{heading}</TitleH1>;

export const H2 = ({ children }) => <TitleH2>{children}</TitleH2>;

export const H3 = ({ children }) => <TitleH3>{children}</TitleH3>;

export const P = ({ children }) => <BodyP>{children}</BodyP>;
import styled from "styled-components";

export const HeaderOne = styled.h1`
margin: 0rem;
padding: 2rem;
color: yellow;
background-color: #1e1e1e;
font-size: 2rem;
text-align: center;
`
export const HeaderTwo = styled.h2`
color: yellow;
margin: 1rem;
word-wrap: break-word;
`
export const HeaderThree = styled.h3`
color: white;
margin-top: 1rem;
word-wrap: break-word;
font-size: 2rem;
line-height: 1.5;

@media(min-width: 1024px) {
color: white;
margin: 1rem;
word-wrap: break-word;
font-size: 3rem;
}
`
export const BodyText = styled.p`
color: white;
margin: 0;
padding: 0;
line-height: 1.5;
`
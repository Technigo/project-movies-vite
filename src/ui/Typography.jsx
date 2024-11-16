import styled from "styled-components";

export const CardH1 = styled.h1`
  //Mobile MovieGallery (styled in MovieCard)
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  unicode-bidi: isolate;
`;

export const DetailsH2 = styled.h2`
  font-size: 1.5em;
  line-height: 1.4;
  letter-spacing: 0.03em;
`;

export const P = styled.p`
  //Mobile MovieGallery (styled in MovieCard)
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
  line-height: 1.4;
  letter-spacing: 0.03em;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`; 

import styled from "styled-components";

export const CardContainer = styled.section`
display: flex;
flex-direction: row;
overflow-x: auto;
gap: 0.5rem;
white-space: nowrap;
margin-bottom: 6rem;
width: 100%;
padding: 1rem;

@media (min-width: 500px){
    margin: 1rem 2rem 2rem 2rem;
    max-width: 90%;
}
@media (min-width: 1024px) {
    margin: 1rem 4rem 4rem 4rem;
    max-width: 90%;
}
`
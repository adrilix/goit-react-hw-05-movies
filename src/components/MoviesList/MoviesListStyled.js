import styled from'styled-components';

export const MoviesListStyled = styled.ul`
padding-top: 32px;
display: grid;
grid-template-columns: repeat(1, 1fr);

@media screen and ( min-width: 767px){
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 64px;
}

@media screen and ( min-width: 1440px){
    grid-template-columns: repeat(3, 1fr);
}
`

export const LiStyled = styled.li`
    position: relative;
    transition: all 0.2s;

    &:hover,
    &:focus {
    transform: scale(1.02);

    .poster{
        filter: saturate (175%);
        box-shadow: 0, 0, 20px rgba(107, 46, 6, 0.7);
    }
}
`
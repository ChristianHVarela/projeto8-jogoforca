import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    height: 550px;
    width: 100%;
    justify-content: space-between;
`

export const ImagemForca = styled.img`
    width: 400px;
    height: 470px;
    margin-top: 60px;
    margin-left: 40px;
`

export const ButtonEscolherPalavra = styled.button`
    width: 200px;
    height: 60px;
    border-radius: 8px;
    border: hidden;
    background-color: #27AE60;
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    color: #FFFFFF;
    margin-top: 90px;
    margin-right: 50px;
    cursor: pointer;
    &:hover {
        filter: brightness(0.8);
    }
    &:active {
        filter: brightness(1.2);
    }
`

export const ContainerDireita = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
export const ContainerLetras = styled.div`
    display: flex;
    margin-right: 300px;
`


export const LetrasUnder = styled.p`
    font-family: 'Noto Sans';
    font-weight: 700;
    font-size: 50px;
    color: ${(props) => (props.acertou ? '#27AE60' : props.errou ? '#FF0000' : '#000000')};
    margin-right: 5px;
`
export const ContainerButton = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
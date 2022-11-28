import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 175px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerLetras = styled.div`
    width: 700px;
    height: 100px;
    display: flex;
    flex-wrap: wrap;
`
export const Letra = styled.button`
    width: 40px;
    height: 40px;
    margin-left: 12px;
    background-color: #E1ECF4;
    border: 1px solid #7AA7C7;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 16px;
    color: #39739D;
    cursor: pointer;
    &:disabled {
        color: #7aa7c7;
        background-color: #9FAAB5;
    }
    &:hover {
        filter: brightness(0.8);
    }
    &:active {
        filter: brightness(1.2);
    }
`
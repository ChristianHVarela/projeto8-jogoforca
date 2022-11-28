import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: calc(vw - 741px);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Central = styled.div`
    display: flex;
    align-items: center;
`

export const Paragrafo = styled.p`
    width: 144px;
    height: 23px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
`
export const Input = styled.input`
    width: 353px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    margin-left: 12px;
    margin-right: 12px;
`
export const Button = styled.button`
    width: 100px;
    height: 40px;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 16px;
    color: #3C76A1;
    background-color: #E1ECF4;
    border: 1px solid #7AA7C7;
    border-radius: 3px;
    cursor: pointer;
`

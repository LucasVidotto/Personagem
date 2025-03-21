import styled from "styled-components";

export const ButtonEye = styled.button`
    display: flex;
    position:absolute;
    top: 10%;
    left: 5.5%;
    width: 4rem;
    height: 4rem;
    background-color: #f0f0f0;
    border-radius: 50%;
`

export const ButtonHead = styled.button`
    display: flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    top: 20%;
    left: 5.5%;
    width: 4rem;
    height: 4rem;
    background-color: #f0f0f0;
    border-radius: 50%;

    & > div{
        width : 30px;
        height: 20px;
        background-color: blue;
        border-radius: 127px 122px 0px 0px;
        -webkit-border-radius: 127px 122px 0px 0px;
        -moz-border-radius: 127px 122px 0px 0px
    }
`
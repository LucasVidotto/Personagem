import styled from "styled-components";

export const BoxColor = styled.div`
    display:flex;
    position:absolute;
    top: 10%;
    left: 10%;
    width: 25rem;
    height: 15rem;
    gap: 1rem;
    flex-wrap: wrap;
    border-radius:1rem;
    backdrop-filter: blur(9px) saturate(180%);
    -webkit-backdrop-filter: blur(9px) saturate(180%);
    background-color: rgba(3, 19, 50, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);

    & > button{
        display:flex;
        justify-content:center;
        width:20%;
        height : 40px;
        background-color: yellow;
        border:1rem;
        cursor: pointer;
        color: white;
        
    }
`
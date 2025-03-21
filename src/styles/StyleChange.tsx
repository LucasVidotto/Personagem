import styled from "styled-components";

export const Box = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    background-color:rgba(000,255,0,0.5);
`

export const CardBack = styled.div`
    width: 200px;
    height: 150px;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardMid = styled.div<{bgcolor?: string}>`
    width: 200px;
    height: 150px;
    background-color: ${(props) => props.bgcolor ?? "rgba(0, 0, 255, 0.5)"};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 127px 122px 0px 0px;
    -webkit-border-radius: 127px 122px 0px 0px;
    -moz-border-radius: 127px 122px 0px 0px;
`

export const EarLeft = styled.div`
    position:absolute;  
    width:40px;
    height: 35px;
    top: 43%;
    left: 56.7%;
    background-color: #a2230d;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0px 122px 121px 0px;
    -webkit-border-radius: 0px 122px 121px 0px;
    -moz-border-radius: 0px 122px 121px 0px;
`

export const EaeRight = styled.div`
    position:absolute;  
    width:40px;
    height: 35px;
    top: 43%;
    right: 56.7%;
    background-color: #a2230d;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 119px 0px 0px 119px;
    -webkit-border-radius: 119px 0px 0px 119px;
    -moz-border-radius: 119px 0px 0px 119px;
`

export const EyesLeft = styled.div`
    position:absolute;  
    width:60px;
    height: 45px;
    top: 41%;
    left: 45%;
    background-color: #13855d;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`

export const EyesRight = styled.div`
    position:absolute;  
    width:60px;
    height: 45px;
    top: 41%;
    left: 51%;
    background-color: #13855d;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`

export const GlassLeft = styled.div`
    position:absolute;  
    width:75px;
    height: 60px;
    top: 40%;
    left: 50.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    backdrop-filter: blur(2px) saturate(150%);
    -webkit-backdrop-filter: blur(2px) saturate(150%);
    background-color: rgba(116, 123, 132, 0.20);
    border: 1px solid rgba(255, 255, 255, 0.125);
`
export const CenterGlass = styled.div`
    position:absolute;  
    width:13px;
    height: 4px;
    top: 43.5%;
    left: 49.7%;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(2px) saturate(150%);
    -webkit-backdrop-filter: blur(2px) saturate(150%);
    background-color: rgb(20, 20, 21);
`
export const GlassRight = styled.div`
    position:absolute;  
    width:75px;
    height: 60px;
    top: 40%;
    left: 44.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    backdrop-filter: blur(2px) saturate(150%);
    -webkit-backdrop-filter: blur(2px) saturate(150%);
    background-color: rgba(116, 123, 132, 0.20);
    border: 1px solid rgba(255, 255, 255, 0.125);
`
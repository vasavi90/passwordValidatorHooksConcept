// Style your elements here
import styled from "styled-components";

export const AppContainer = styled.div`
background-color:#24263c;
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const InputContainer = styled.div`
background-color:#383a4e;
height:300px;
width:300px;
padding:10px;
border-radius:10px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media screen and (min-width:768px){
    height:500px;
    width:600px;
}
`
export const Heading = styled.h1`
font-family:"Roboto";
font-size:20px;
color:#f8fafc;
font-weight:500;
@media screen and (min-width:768px){
    font-size:26px;
    
}
`
export const Text = styled.p`
font-family:"Roboto";
font-size:18px;
font-weight:400;
color:#ffffff;
@media screen and (min-width:768px){
    font-size:22px;
}
`
export const Input = styled.input`
background-color:#edeeff;
width:200px;
outline:none;
padding:10px;
color:#475569;
font-family:"Roboto";
font-size:18px;
 
`
export const ErrorText = styled.p`
color:#ef4444;
font-family:"Roboto";
font-size:19px;
font-weight:400;
@media screen and (min-width:768px){
    font-size:25px;
}
`



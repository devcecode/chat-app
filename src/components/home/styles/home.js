import styled from "styled-components";

export const HomeStyled = styled.div`
padding: 0 1em;
display: flex;
align-items: center;
height: 100vh;
background-color: ${({ background }) => background};
`
export const HomeContainer = styled.div`
margin: 0 auto;
width: 100%;
max-width: 500px;
`

export const Form = styled.form`
`

export const FormElement = styled.div`
`

export const InputContainer = styled.div`
position: relative;
width: 100%;
`

export const Input = styled.input`
font-size: 1em;
padding: .5em;
line-height: 1em;
border-radius: .5em;
display: block;
width: 100%;
height: 52px;
border: 3px solid ${({ border }) => border};
outline: none;

&:focus {
  border-color: dodgerblue;
}
`

export const IconContainer = styled.div`
position: absolute;
right: 10px;
top: 15px;
color: ${({ color }) => color};
font-size: 1.5em;

&:hover {
  color: ${({ hoverColor }) => hoverColor};
}
`
import styled from "styled-components"

export const ChatBodyStyled = styled.div`
flex: 1;
margin-left: 2px;
`
export const ChatBodyContainer = styled.div``

export const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1em;
height: 120px;
background-color: ${({ background }) => background};
`

export const Body = styled.div`
height: calc(100vh - 220px);
overflow-y: scroll;
`

export const Footer = styled.div`
height: 100px;
background-color: green;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1em;
background-color: ${({ background }) => background};
`

export const ChatBodyTitle = styled.h4`
font-family: 'Product Sans';
font-weight: 400;
`

export const LeaveChat     = styled.button`
background-color: red;
color: #ffffff;
padding: .75em;
min-width: 150px;
text-align: center;
border: none;
outline: none;
`

export const InputContainer = styled.div`
flex: 1;
position: relative;
`

export const MessageStatus = styled.div`
position: absolute;
top: 0;
left: 0;
padding: .25em .5em;
font-size: .9em;
font-family: 'Product Sans';
`

export const Input = styled.input`
display: block;
width: 100%;
height: 74px;
border-radius: 1em;
padding: 1em;
border: 3px solid ${({ border }) => border};
outline: none;
font-size: 1em;

&:focus {
  border-color: dodgerblue;
}
`
export const Button = styled.button`
width: 150px;
background-color: green;
border: none;
outline: none;
padding: 1em;
text-align: center;
margin-left: 50px;
color: #ffffff;
cursor: pointer;
`

export const MessageContainer = styled.div`
margin: 1em;
`
export const UserMessage = styled.p`
margin-bottom: .5em;
font-family: 'Product Sans';
`
export const Message = styled.div`
font-family: 'Product Sans';
padding: 1em;
border-radius: .5em;
`

export const User = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ProfilePicture = styled.div`
position: relative;
border-radius: 50%;
width: 72px;
height: 72px;
background-color: #dddddd;
border: 1px solid #d6d6d6;
margin-bottom: .25em;

&::before {
  content: '';
  display: block;
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #32dc6a;
  bottom: 5px;
  right:  6px;
}
`

export const UserName = styled.h4`
font-weight: 400;
font-family: 'Product Sans';
`
import styled from "styled-components"

export const ButtonContainer = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  font-weight: 900;
  letter-spacing: .8px;
  border: 3px solid orangered;
  background-color: #fff;
  color: orangered;
  padding: 7px 15px;
  cursor: pointer;
  transition: all .5s ease;

  &:hover {
    background-color: orangered;
    color: #fff;
  }
`
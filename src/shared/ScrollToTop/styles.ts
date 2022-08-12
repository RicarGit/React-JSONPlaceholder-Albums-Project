import styled from "styled-components"

type Visible = {
  isVisible: boolean
}

export const ScrollToTopContainer = styled.div<Visible>`
  height: 60px;
  width: 60px;
  font-weight: bold;
  text-align: center;
  line-height: 3.3;
  margin: 50px;
  border-radius: 50%;
  background-color: orangered;
  color: #fff;
  position: fixed;
  right: 0;
  bottom: 0;
  cursor: pointer;
  transition: opacity .5s ease-in-out;
  opacity: ${({ isVisible }) => isVisible ? '100' : '0'};

  @media (max-width: 560px) {
    height: 50px;
    width: 50px;
    margin: 8px;
    line-height: 2.9;
  }
`
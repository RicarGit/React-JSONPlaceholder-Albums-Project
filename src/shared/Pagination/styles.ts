import styled from "styled-components/macro"

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  width: 80vw;
  margin: 40px auto 0 auto;
`

export const PageButton = styled.li`
  height: 25px;
  width: 30px;
  margin: 5px;
  border: 2px solid black;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: all .25s ease;

  &:hover {
    transform: scale(1.3);
  }
`
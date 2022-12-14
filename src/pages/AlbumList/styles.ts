import styled from "styled-components/macro"

export const AlbumContainer = styled.ul`
  margin: 0 auto;
  width: 80%;

  a {
    color: inherit;
  }

  @media (max-width: 560px) {
    width: 90%;
  }
`

export const AlbumItem = styled.li`
  border: 3px solid #000;
  margin: 0 10px 10px 10px;
  background-color: #fff;
  transition: all .2s ease;
  cursor: pointer;

  &:hover {
    border-color: orangered;
    color: orangered;
    transform: scale(1.012);
  }
`

export const AlbumTitle = styled.h3`
  padding: 20px;

  @media (max-width: 560px) {
    padding: 15px;
  }
`
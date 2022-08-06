import styled from "styled-components/macro"

type AlbumClick = {
  onClick: () => void
}

export const AlbumContainer = styled.ul`
  margin: 0 auto;
  width: 80%;
`

export const AlbumItem = styled.li<AlbumClick>`
  border: 3px solid #000;
  margin: 0 10px 10px 10px;
  background-color: #fff;
  transition: all .2s ease;
  cursor: pointer;

  &:hover {
    border-color: orangered;
    color: orangered;
  }
`

export const AlbumTitle = styled.h3`
  padding: 20px;
`
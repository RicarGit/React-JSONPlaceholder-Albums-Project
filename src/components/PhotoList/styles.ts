import styled from "styled-components/macro"

export const PhotoListContainer = styled.ul`
  margin: 0 auto;
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export const PhotoItem = styled.li`
  height: 150px;
  width: 150px;
  margin: 15px;
  border: 3px solid blue;
`

export const PhotoThumb = styled.img`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
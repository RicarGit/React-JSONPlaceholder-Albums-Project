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
  margin: 15px;
  padding: 20px;
  border: 3px solid orangered;
`

export const PhotoThumb = styled.img`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
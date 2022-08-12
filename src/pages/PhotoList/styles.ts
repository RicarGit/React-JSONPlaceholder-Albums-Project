import styled from "styled-components/macro"

export const PhotoListContainer = styled.ul`
  position: relative;
  margin: 0 auto;
  padding-top: 30px;
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  button {
    top: -12px
  }

  @media (max-width: 560px) {
    width: 90vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;

    button {
      padding: 6px 10px;
    }
  }
`

export const PhotoItem = styled.li`
  margin: 15px;
  padding: 20px;
  border: 3px solid #000;
  transition: all .15s linear;

  &:hover {
    transform: scale(1.06);
    border-color: orangered;
  }

  @media (max-width: 560px) {
    margin: 0;
    padding: 8px;
  }
`

export const PhotoThumb = styled.img`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
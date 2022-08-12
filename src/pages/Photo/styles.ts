import styled from "styled-components/macro"

export const PhotoBigContainer = styled.div`
  position: relative;
  width: 80vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media (max-width: 1100px) {
    margin: 60px auto;

    button {
      top: -47px;
      padding: 6px 10px;
    }
  }
`

export const PhotoImage = styled.img`
  padding: 30px;
  border: 3px solid orangered;

  @media (max-width: 900px) {
    padding: 20px;
    max-width: 100%;
  }
`
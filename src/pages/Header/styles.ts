import styled from "styled-components/macro"

export const Container = styled.header`
  margin: 0 auto 30px auto;
  padding-left: 20px;
  height: 100px;
  width: 80vw;
  display: flex;
  align-items: center;
  border-bottom: 3px solid #ccc;
  border-color: orangered;
  color: orangered;

  @media (max-width: 560px) {
    height: 60px;
    width: 90vw;
    margin-bottom: 20px;
    padding: 0;
    justify-content: center;
  }
`

export const Title = styled.h1`
  font-size: 55px;
  font-weight: bold;

  @media (max-width: 560px) {
    font-size: 40px;
  }
`
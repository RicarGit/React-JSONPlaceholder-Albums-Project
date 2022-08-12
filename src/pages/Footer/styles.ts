import styled from "styled-components"

export const FooterContainer = styled.footer`
  height: 100px;
  width: 80vw;
  margin: 40px auto 0 auto;
  padding: 8px 0 0 20px;
  font-size: 22px;
  font-weight: bold;
  color: orangered;
  border-top: 3px solid orangered;

  @media (max-width: 560px) {
    height: 60px;
    width: 90vw;
    margin: 30px auto 0 auto;
    padding-left: 10px;
    font-size: 18px;
  }
`
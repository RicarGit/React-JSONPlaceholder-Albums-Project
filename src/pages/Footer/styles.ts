import styled from "styled-components/macro"

export const FooterContainer = styled.footer`
  width: 80vw;
  margin: 30px auto 0 auto;
  padding: 8px 0 40px 20px;
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
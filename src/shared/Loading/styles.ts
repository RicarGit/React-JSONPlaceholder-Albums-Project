import styled from "styled-components/macro"

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

export const Loading = styled.img`
  height: 80px;
  width: 80px;
  animation: loading 1.2s linear infinite;

  @keyframes loading {
    from {
      transform: rotate(0);
    }
    
    to {
      transform: rotate(360deg);
    }
  }
`
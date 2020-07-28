import styled from 'styled-components'

export const Container = styled.div`
   max-width: 960px;
   margin: 20px auto;

   display: flex;
   align-items: center;
   justify-content: space-between;

   @media(max-width: 540px){
     display: flex;
     flex-direction: column;
     align-items: start;
   }
`

export const Title = styled.div`
`;


export const ModoDark = styled.div`
  margin-top: -20px;

  button {
    padding: 10px;
    background: #f4f4f4;
    color: #252525;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
  }

  @media(max-width: 540px){
     margin-top: 10px;
   }
`;
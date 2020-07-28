import styled from 'styled-components'

export const Container = styled.div`
  max-width: 960px;
  margin: 20px auto;

  h3 {
      margin-bottom: 20px;
      font-size: 38px;
  }
  
`

export const Cards = styled.div``;

export const CardInfo = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  grid-gap: 20px;

  li {
      background: #252525;
      color: #fff;
      padding: 20px;
      border-radius: 5px;
      border-top: 5px solid blueviolet;

      div {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        align-items: center;
      }
  }

  @media(max-width: 560px){
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      }
`;
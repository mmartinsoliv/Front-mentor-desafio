import styled from 'styled-components'

export const Container = styled.div`
  max-width: 960px;
  margin: 20px auto;

`;

export const Card = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  grid-gap: 20px;

  li {
      background: #252525;
      color: #fff;
      padding: 30px;
      text-align: center;
      border-radius: 5px;
      border-top: 5px solid blueviolet;

      h3 {
          margin: 10px;
          font-size: 12px;
      }

      h2 {
          margin: 20px;
          font-size: 38px;
      }

      span {
          display: flex;
          justify-content: center;
          margin: 10px;
          font-size: 14px;
      }
  }

  @media(max-width: 560px){
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      }
`;
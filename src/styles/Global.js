import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle `
 *{
     margin: 0px;
     padding: 0px;
     outline: 0px;
     box-sizing: border-box
 }

 li{
     list-style: none;
 }

 img {
     display: block;
     max-width: 100%;
 }

 body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
}
`
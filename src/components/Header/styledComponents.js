import styled from "styled-components";

export const HeaderContainer = styled.div`
 width:100%;
 height :10vh;
 background-color:#ffffff;
 box-shadow: 0 4px 6px rgba(135, 206, 235, 0.6);
 display: flex;
 align-items: center;
 justify-content: space-between;
`

export const Logo = styled.img`
  height:17%;
  width:17%;
  object-fit: contain;
`;


export const Button = styled.button`
  background-color: transparent;
  color: green;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  padding: 8px 14px;
  border-radius: 6px;
  text-decoration: none;
  border: 1px solid green;
  transition: 0.3s ease;
  &:hover {
    background-color: rgba(0, 128, 0, 0.1);
  }
  
  @media screen and (max-width: 480px) {
    height:7vh;
    width:100%;
    font-size:12px;

  }

`;



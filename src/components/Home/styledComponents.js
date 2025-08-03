import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const HomeminiContainer = styled.div`
  height:100vh;
  display:flex;

`
export const TabContainer = styled.ul`
   padding:0px;
   height:85vh;
   overflow-y:auto;
   width:30%;
   box-shadow: 5px 0px 10px rgba(154, 238, 84, 0.1);
  &::-webkit-scrollbar {
    display: none;
  }
  

`
export const DoctorsBox = styled.div`
  height: 100vh;
  width: 80%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width:50%;
  }
`

export const DoctorsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-height: 100vh;
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`
  

export const HomeMiniContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`

export const TabListContainer = styled.ul`
  width: 250px;
  background-color: #f1f1f1;
  padding: 16px;
  overflow-y: auto;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`

export const DoctorsContentContainer = styled.div`
  flex-grow: 1;
  padding: 16px;
  overflow-y: auto;

  @media screen and (max-width: 768px) {
    padding: 12px;
  }

  @media screen and (max-width: 480px) {
    padding: 8px;
  }
`


export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width:40%;
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  margin-top:2%;
  margin-left:2%;
  

  @media screen and (max-width: 768px) {
   width:70%;
  }
`

export const SearchInput = styled.input`
  border:none;
  outline:none;
  font-size: 16px;
  flex: 1;
  @media screen and (max-width: 768px) {
    font-size:12px;
  }
`



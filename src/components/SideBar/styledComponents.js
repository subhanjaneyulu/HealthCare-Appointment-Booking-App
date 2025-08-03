import styled from 'styled-components'

export const ListItem = styled.li`
  margin: 10px;
  list-style-type:none;

`

export const TabButton = styled.button`
  background-color: ${props => (props.isActive ? 'green' : 'blue')};
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 8px;
  cursor: pointer;
  margin:0px;
  white-space: nowrap;
  background: transparent;
  border: 1px solid ${props => (props.isActive ? 'green' : 'blue')};
  color: ${props => (props.isActive ? 'green' : 'blue')};

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 10px 25px rgba(129, 245, 83, 0.4);
  }


  @media screen and (max-width: 768px) {
    flex-shrink: 0;
  }
`

export const TabsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    overflow-x: auto;
  }
`

import styled from "styled-components"
import { X } from "lucide-react" 

export const AppointmentContainer = styled.div`
  padding: 30px;
  background-color: #f1f5f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  font-size: 32px;
  color: #0f172a;
  margin-bottom: 20px;
  text-align: center;
`

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
`

export const AppointmentCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;

  @media screen and (max-width: 480px) {
    width: 90%;
  }
`

export const CardLabel = styled.p`
  font-weight: bold;
  margin: 5px 0 0;
  color: #334155;
`

export const CardValue = styled.p`
  margin: 0 0 10px;
  color: #475569;
`

export const BackButton = styled.button`
  margin-top: 30px;
  padding: 10px 20px;
  background-color: #18f37aff;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #25a9ebff;
  }
`
export const RemoveIcon = styled(X)`
  position: absolute;
  top: 8px;
  right: 8px;
  color: red;
  cursor: pointer;
  width: 20px;
  height: 20px;
`

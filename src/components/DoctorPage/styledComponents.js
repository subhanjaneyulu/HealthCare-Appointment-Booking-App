import styled from "styled-components"

export const DoctorsContainer = styled.div`
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

// Individual Card
export const DoctorCard = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 16px;
  margin: 12px;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 576px) {
    width: 90%;
  }
`

// Doctor Image
export const DoctorImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: contain;
  object-position: center;
  border-radius: 12px;
  background-color: #f0f0f0;
`

export const DoctorName = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 12px 0 4px;
  color: #333;
  text-align: center;
`

export const Specialization = styled.p`
  font-size: 16px;
  color: #777;
  margin-bottom: 10px;
  text-align: center;
`

export const Button = styled.button`
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background-color: ${props => (props.available ? "#28a745" : "#dc3545")};
  border: none;
  border-radius: 8px;
  cursor: ${props => (props.available ? "pointer" : "not-allowed")};
  opacity: ${props => (props.available ? "1" : "0.6")};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props =>
      props.available ? "#218838" : "#c82333"};
  }

  width: 100%;
  max-width: 240px;
`

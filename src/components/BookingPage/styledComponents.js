import styled from "styled-components"

export const BookingContainer = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0fff4;
  padding: 20px;
`

export const BookingCard = styled.form`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0px 4px 16px rgba(0, 128, 0, 0.3);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Label = styled.label`
  font-size: 16px;
  color: #333;
  margin-top: 15px;
`

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-top: 6px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
`

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  font-size: 18px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`

export const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`

export const Popup = styled.div`
  position: absolute;
  top: -40px;
  left: 0;
  background-color: #d4edda;
  color: #155724;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(0, 128, 0, 0.3);
`
export const DoctorInfoCard = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #eef6f9;
  border-radius: 12px;
  margin-bottom: 20px;
`

export const DoctorImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
`

export const DoctorName = styled.h3`
  font-size: 20px;
  margin: 0;
  color: #0b69ff;
`

export const DoctorSpecialization = styled.p`
  margin: 4px 0 0;
  color: #555;
`

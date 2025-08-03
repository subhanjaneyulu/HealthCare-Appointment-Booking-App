import React, { useEffect, useState } from "react"
import {
  AppointmentContainer,
  Heading,
  CardsWrapper,
  AppointmentCard,
  CardLabel,
  CardValue,
  BackButton,
  RemoveIcon,
} from "./styledComponents"
import { useNavigate } from "react-router-dom"
import { X } from "lucide-react" 

const AppointmentViewPage = () => {
  const [appointments, setAppointments] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const storedData = localStorage.getItem("appointments")
    if (storedData) {
      setAppointments(JSON.parse(storedData))
    }
  }, [])

  const handleRemove = (indexToRemove) => {
    const updatedAppointments = appointments.filter((_, i) => i !== indexToRemove)
    setAppointments(updatedAppointments)
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments))
  }

  const handleBack = () => {
    navigate("/home")
  }

  return (
    
    <AppointmentContainer>
      <Heading>Your Appointments</Heading>
      <CardsWrapper>
        {appointments.length === 0 ? (
          <p>No appointments yet.</p>
        ) : (
          appointments.map((each, index) => (
            <AppointmentCard key={index}>
                <RemoveIcon onClick={() => handleRemove(index)}>
                <X size={20} />
              </RemoveIcon>
              <CardLabel>Patient Name:</CardLabel>
              <CardValue>{each.name}</CardValue>

              <CardLabel>Email:</CardLabel>
              <CardValue>{each.email}</CardValue>

              <CardLabel>Date & Time:</CardLabel>
              <CardValue>{each.dateTime}</CardValue>
            </AppointmentCard>
          ))
        )}
      </CardsWrapper>
      <BackButton onClick={handleBack}>Back to Booking</BackButton>
    </AppointmentContainer>
  )
}

export default AppointmentViewPage;

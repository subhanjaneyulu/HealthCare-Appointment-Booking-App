import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../Header"
import {
  BookingContainer,
  BookingCard,
  Input,
  Label,
  Button,
  ErrorText,
  Popup,
} from "./styledComponents"

const BookingPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [dateTime, setDateTime] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [showPopup, setShowPopup] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()

    if (!name || !email || !dateTime) {
      setErrorMsg("Please fill all the details")
      return
    }

    const newAppointment = {
      id: Date.now(),
      name,
      email,
      dateTime,
    }

    const existingAppointments =
      JSON.parse(localStorage.getItem("appointments")) || []
    const updatedAppointments = [...existingAppointments, newAppointment]
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments))

    setShowPopup(true)

    setTimeout(() => {
      setShowPopup(false)
      navigate("/appointment-view")
    }, 1500)
  }

  return (
    <>
      <Header />
      <BookingContainer onSubmit={handleSubmit}>
        <BookingCard>
          <Label>Patient Name:</Label>
          <Input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <Label>Email ID:</Label>
          <Input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <Label>Date & Time:</Label>
          <Input
            type="datetime-local"
            value={dateTime}
            onChange={e => setDateTime(e.target.value)}
          />

          {errorMsg && <ErrorText>{errorMsg}</ErrorText>}

          <Button type="submit">Book Appointment</Button>
          {showPopup && <Popup>Appointment Booked Successfully!</Popup>}
        </BookingCard>
      </BookingContainer>
    </>
  )
}

export default BookingPage;

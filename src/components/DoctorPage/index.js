import{Link} from "react-router-dom";

import {
  DoctorCard,
  DoctorImage,
  DoctorName,
  Specialization,
  Button,
} from './styledComponents'

const DoctorPage = props => {
  const {doctorDetails} = props
  const {name, specialization, image, available} = doctorDetails

  return (
    <DoctorCard>
      <DoctorImage src={image} alt={name} />
      <DoctorName>{name}</DoctorName>
      <Specialization>{specialization}</Specialization>
      <Link to="/book" state={{ doctorDetails }}>
        <Button available={available}>
        {available ? 'Book Your Appointment' : 'Doctor Unavailable'}
      </Button>
      </Link>
      
    </DoctorCard>
  )
}

export default DoctorPage;

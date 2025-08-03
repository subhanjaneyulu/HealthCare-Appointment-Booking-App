import {HeaderContainer,Logo,Button} from "./styledComponents"
import {Link} from "react-router-dom";

const Header = () => (
   <HeaderContainer>
      <Link to="/">
     <Logo src="https://res.cloudinary.com/dhdz6ibqe/image/upload/v1754045598/health_care_logo_ya1q4n.jpg" alt="logo"/>
     </Link>
     <Link to="/appointment-view">
        <Button>
            My Appointments
        </Button>
     </Link>

   </HeaderContainer>
);
export default Header;
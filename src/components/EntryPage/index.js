import React, { useState } from "react";
import {Link} from "react-router-dom"
import { Container, IconButton, StyledArrow } from "./styledComponents";
import { FaArrowRight } from "react-icons/fa";

const EntryPage = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <Container>
      <Link to="/home">
      <IconButton onClick={handleClick}>
        <StyledArrow clicked={clicked}>
          <FaArrowRight />
        </StyledArrow>
      </IconButton>
      </Link>
    </Container>
  );
};

export default EntryPage;

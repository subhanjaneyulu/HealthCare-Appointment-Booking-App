import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url("https://res.cloudinary.com/dhdz6ibqe/image/upload/v1754028200/Different_Types_Of_Technology_Most_Important_Ones_Tech_Quintal_y17ll7.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
`;

export const IconButton = styled.button`
  position: absolute;
  bottom: 24px;
  right: 24px;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(135deg, #db278aff, #66aabb); 
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 767px) {
    width: 50px;
    height: 50px;
    bottom: 16px;
    right: 16px;
  }
`;

export const StyledArrow = styled.div`
  font-size: 26px;
  color: ${(props) => (props.clicked ? "#e8f0f0ff" : "#f0f0f0")};
  transition: color 0.3s ease;

  @media (max-width: 767px) {
    font-size: 22px;
  }
`;

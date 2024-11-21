import styled from "styled-components";
import { Carousel } from "react-responsive-carousel"; // Importando o Carousel aqui

export const Container = styled.div`
  background-color: #000;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

export const StyledCarousel = styled(Carousel)`
  .carousel .slide img {
    max-height: 300px;
    object-fit: cover;
    width: 100%;
  }

  .carousel .control-arrow {
    color: #ffc107;
  }

  .carousel .legend {
    background: rgba(0, 0, 0, 0.7);
    font-size: 14px;
    padding: 10px;
    color: #fff;
  }
`;

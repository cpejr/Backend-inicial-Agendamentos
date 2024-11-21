import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container, StyledCarousel } from "./Styles";

const Home = () => {
  return (
    <Container>
      <StyledCarousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        showStatus={false}
        emulateTouch
      >
        <div>
          <img
            src="https://via.placeholder.com/800x400"
            alt="Slide 1"
          />
          <p className="legend">Sobre a Empresa - Slide 1</p>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/800x400"
            alt="Slide 2"
          />
          <p className="legend">Sobre a Empresa - Slide 2</p>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/800x400"
            alt="Slide 3"
          />
          <p className="legend">Sobre a Empresa - Slide 3</p>
        </div>
      </StyledCarousel>
    </Container>
  );
};

export default Home;

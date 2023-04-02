import { Box } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
// import 'bootstrap/dist/css/bootstrap.min.css';
function CarouselFadeExample() {
  return (
    <DIV className="mainCaraousel">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            //   src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/14/7cec9b95-a683-473c-aca8-cc510821b1cd1676394720493-Desktop-Banner.gif"
            src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/3/10/a1690ca9-bcec-469d-b15b-991b3dad64bc1646910870888-SS22-StripBanners-UnisexUnder999.gif"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/3/10/2a0effa7-c662-45c8-8084-96cdea0710c21646911018691-unisex-1499.gif"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/3/10/02068605-5f9f-404a-8b1d-87eaaba283e71646914652766-SS22-PricingCoupon-600Off--1-.gifhttps://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/3/10/6160db76-ee07-49bc-8337-1fc74dd94c2a1646914679466-SS22-PricingCoupon-500Off--1-.gif"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </DIV>
  );
}

export default CarouselFadeExample;

const DIV = styled.div`
  z-index: -1;
  position: relative;
  padding-top: 6rem;
`;

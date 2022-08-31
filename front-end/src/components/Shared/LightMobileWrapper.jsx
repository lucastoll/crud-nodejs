import c from "../../../public/styles/colors.json";
import styled from "styled-components"

export const LightBrownMobileWrapper = styled.div`
  background: ${c.lightBrown};
  width: 100%;
  height: 100vh;
  padding: 40px 30px;
  color: black;
  overflow: hidden;
  box-shadow: 0px 20px 50px 0px #00000026;

  @media screen and (min-width: 1024px) {
    min-height: auto;
    height: 100%;
    border-radius: 30px;
  }

  @media screen and (min-width: 1440px) {
    padding: 60px 150px 60px 150px;
  }
`;

export const LightBrownMobileWrapperNewJoke = styled(LightBrownMobileWrapper)`
  height: 100%;
  min-height: 100vh;
  padding: 40px 16px 80px;

  @media screen and (min-width: 1024px) {
    min-height: auto;
    padding: 60px 52px;

  }
`;




import styled from "styled-components";
import Background from "../../../public/components/Shared/StageBackground.svg";

export const ContainerStageBackground = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  background-image: url(${Background.src});
  background-repeat: repeat;
  background-position: center;
  background-size: cover;
  padding: 60px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (min-width: 1024px) {
    background-image: url(${Background.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

export const ContainerStageBackgroundPiadas = styled(ContainerStageBackground)`
  height: 100vh;
  padding: 0px;
  overflow: hidden;

  @media screen and (min-width: 1024px) {
    padding: 65px 135px;
  }

  @media screen and (min-width: 1440px) {
    padding: 130px 270px;
  }
`;

export const ContainerStageBackgroundPiadasNewJoke = styled(ContainerStageBackgroundPiadas)`
  height: 100%;
`;

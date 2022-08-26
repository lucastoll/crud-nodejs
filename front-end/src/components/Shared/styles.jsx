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

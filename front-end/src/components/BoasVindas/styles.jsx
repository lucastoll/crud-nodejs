import styled from "styled-components";

import c from "../../../public/styles/colors.json";


export const Frame = styled.div`
  width: 100%;
  height: 100%;
  background: ${c.lightBrown};
  border-radius: 30px;
  padding: 40px 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  z-index: 1;
  overflow: visible;

  @media screen and (min-width: 1024px) {
    justify-content: space-between;
    width: 450px;
    height: 550px;
    padding: 58px 41px;
  }
`;

export const MicrophonePngWrapperAbsolute = styled.div`
  position: absolute;
  bottom: 0;
  left: calc(50% - 350px);

  @media screen and (max-height: 800px) {
    left: calc(50% - 375px);
  }
`

export const MicrophonePngContainer = styled.div`
  height: 471px;
  width: 200px;
  position: relative;
`

export const MicrophoneVectorContainer = styled.div`
  width: 192px;
  height: 123px;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: ${c.grey};
  margin: 16px 0 0 0;

  span {
    color: ${c.primary};
  }
`;

export const Text = styled.p`
  font-size: 14px;
  text-align: center;
  color: ${c.grey};

  strong{
    font-family: "AvenirBlack";
  }
`;

export const Span = styled.p`
  color: ${c.secondary};
  font-family: "AvenirBlack";
`

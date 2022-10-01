import styled from "styled-components";
import c from "../../../public/styles/colors.json";

export const Button = styled.button`
  background-color: ${props => props.backgroundColor ? props.backgroundColor : "#CD1C2F"};
  border-radius: 8px;
  border: none;
  color: ${c.white};
  font-family: "AvenirRoman";
  font-size: 20px;
  outline: none;
  padding: 14px 0;
  width: ${props => props.width ? props.width : "100%"};

  @media screen and (min-width: 1024px) {
    max-width: ${props => props.maxWidth ? props.maxWidth : "100%"};
  }
`

export const ButtonNewJoke = styled(Button)`
  font-size: 14px;
  padding: 17px 0;
`

export const ButtonCancelJoke = styled(ButtonNewJoke)`
  color: ${c.primary};
  background: ${c.white};
  border: 1px solid ${c.primary};
  padding: 17px 0;
`
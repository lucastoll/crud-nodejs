import styled from "styled-components";
import c from "../../../public/styles/colors.json";
import SearchbarIcon from "../../../public/components/SearchBar/SearchIcon.png";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .popoverButtonContainer{
    width: 100%;
    display: flex;
    gap: 16px;
    justify-content: space-between;
  }

  @media screen and (min-width: 1024px) {
    flex-wrap: nowrap;
    gap: 16px;
  }
`;

export const Searchbar = styled.input`
  background: #E9E4DA;
  background-image: url(${SearchbarIcon.src});
  background-position: 15px center;
  background-repeat: no-repeat;
  border-radius: 8px;
  border: 2px solid #DCD8D0;
  margin-bottom: 16px;
  color: ${c.grey};
  font-size: 16px;
  outline: none;
  padding: 9px 9px 9px 59px;
  width: 100%;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 0px;
  }
`;
import React from 'react'
import styled from "styled-components";
import c from "../../../public/styles/colors.json";
import SearchbarIcon from "../../../public/components/SearchBar/SearchIcon.png";
import Link from "next/link";

import { Button } from "../../components/Shared/Button";
import Popover from './Popover';


const Wrapper = styled.div`
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

const Searchbar = styled.input`
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


export default function UtilsWrapper({searchBarContent, setSearchBarContent, order, setOrder, jokes, setJokes}) {
  return (
    <Wrapper>
        <Searchbar
        type="text"
        placeholder="Pesquisar piada"
        value={searchBarContent}
        onChange={(event) => setSearchBarContent(event.target.value)}
        ></Searchbar>
        <div className='popoverButtonContainer'>
        <Popover order={order} setOrder={setOrder} jokes={jokes} setJokes={setJokes} /> 
        <Link href="/">
          <Button width="50%" backgroundColor="#CD1C2F">
              Criar piada
          </Button>
        </Link>       
        </div>
    </Wrapper>
  )
}

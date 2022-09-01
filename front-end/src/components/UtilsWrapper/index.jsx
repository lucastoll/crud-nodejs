import React from 'react'
import Link from "next/link";

import { Button } from "../../components/Shared/Button";
import Popover from './Popover';
import { Searchbar, Wrapper } from './styles';


export default function UtilsWrapper({searchBarContent, setSearchBarContent, order, setOrder}) {
  return (
    <Wrapper>
        <Searchbar
        type="text"
        placeholder="Pesquisar piada"
        value={searchBarContent}
        onChange={(event) => setSearchBarContent(event.target.value)}
        ></Searchbar>
        <div className='popoverButtonContainer'>
        <Popover order={order} setOrder={setOrder} /> 
        <Link href="/newJoke">
          <Button width="50%" backgroundColor="#CD1C2F">
              Criar piada
          </Button>
        </Link>       
        </div>
    </Wrapper>
  )
}

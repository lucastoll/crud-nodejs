import Head from "next/head";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4} from 'uuid'

import UtilsWrapper from "../components/UtilsWrapper";
import Card from "../components/Card";
import { ContainerStageBackgroundPiadas } from "../components/Shared/ContainerStageBackground";
import { LightBrownMobileWrapper } from "../components/Shared/LightMobileWrapper";
import Axios from "axios";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  gap: 15px;
  height: 75%;
  overflow-y: scroll;

  @media screen and (min-height: 700px) {
    height: 85%;
  }

  @media screen and (min-width: 1024px) {
    height: calc(100% - 60px);
  }

&::-webkit-scrollbar {
  width: 10px;
}

/* Track */
&::-webkit-scrollbar-track {
  background: #E5E1D7;
}

/* Handle */
&::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
&::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`

export default function Jokes() {
  const [searchBarContent, setSearchBarContent] = useState("");
  const [order, setOrder] = useState("");
  const [jokes, setJokes] = useState([])  

  useEffect(() => {
    if(jokes.length == 0)
      fetchData("api/piadas");
  }, [jokes])

  function fetchData(url) {
    Axios.get(`http://localhost:5000/${url}`)
      .then(response => {
        return response;
      })
      .then(data => {
        setJokes(data.data);
      });
  }

  function filterParams(val) {
    if (searchBarContent === "") {
      return val;
    } else if (
      val.titulo.toLowerCase().includes(searchBarContent.toLowerCase()) ||
      val.piada.toLowerCase().includes(searchBarContent.toLowerCase()) || 
      val.autor.toLowerCase().includes(searchBarContent.toLowerCase()) 
    ) {
      return val;
    }
    return 0;
  }

  function sortParams(a, b){
    if(order === "likes"){
      return a.likes < b.likes ? 1 : -1
    }
    else if(order === "dislikes")
      return a.dislikes < b.dislikes ? 1 : -1
  }
  
  return (
    <div>
      <Head>
        <title>Só piada boa</title>
        <meta
          name="description"
          content="Aplicação utilizando Banco de dados, CRUD, REST e Next.JS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ContainerStageBackgroundPiadas>
          <LightBrownMobileWrapper>
            <UtilsWrapper
              searchBarContent={searchBarContent}
              setSearchBarContent={setSearchBarContent}
              order={order}
              setOrder={setOrder}
            />
            <CardWrapper>
            {
              jokes
              .sort(sortParams)
              .filter(filterParams)
              .map((data) => (
                <Card data={data} fetchData={fetchData} key={uuidv4()} />
              ))
            }
            </CardWrapper>
          </LightBrownMobileWrapper>
        </ContainerStageBackgroundPiadas>
      </main>
    </div>
  );
}

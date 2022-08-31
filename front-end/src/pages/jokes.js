import Head from "next/head";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4} from 'uuid'

import UtilsWrapper from "../components/UtilsWrapper";
import Card from "../components/Card";
import { ContainerStageBackgroundPiadas } from "../components/Shared/ContainerStageBackground";
import { LightBrownMobileWrapper } from "../components/Shared/LightMobileWrapper";

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
      fetchData("getJokes");
  }, [jokes])

  function fetchData(url) {
    fetch(`http://localhost:3006/${url}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setJokes(data.data);
      });
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
              jokes={jokes}
              setJokes={setJokes}
            />
            <CardWrapper>
            {
              order === "likes" ? 
              jokes
              .sort( (a, b) => a.likes < b.likes ? 1 : -1)
              .filter((val) => {
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
              })
              .map((data) => (
                <Card data={data} key={uuidv4()} />
              ))
              : ""
            }
            {
              order === "dislikes" ? 
              jokes
              .sort( (a, b) => a.dislikes < b.dislikes ? 1 : -1)
              .filter((val) => {
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
              })
              .map((data) => (
                <Card data={data} key={uuidv4()} />
              ))
              : ""
            }
            {
              order === "" ? 
              jokes
              .filter((val) => {
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
              })
              .map((data) => (
                <Card data={data} key={uuidv4()} />
              ))
              : ""
            }
            </CardWrapper>
          </LightBrownMobileWrapper>
        </ContainerStageBackgroundPiadas>
      </main>
    </div>
  );
}

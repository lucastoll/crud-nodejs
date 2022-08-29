import { useEffect, useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import { v4 as uuidv4} from 'uuid'

import { ContainerStageBackground } from "../components/Shared/ContainerStageBackground";
import UtilsWrapper from "../components/UtilsWrapper";

import c from "../../public/styles/colors.json";
import Card from "../components/Card";

const ContainerStageBackgroundPiadas = styled(ContainerStageBackground)`
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

const LightBrownMobileWrapper = styled.div`
  background: ${c.lightBrown};
  width: 100%;
  height: 100vh;
  padding: 40px 30px;
  color: black;
  overflow: hidden;

  @media screen and (min-width: 1024px) {
    min-height: auto;
    height: 100%;
    border-radius: 30px;
  }

  @media screen and (min-width: 1440px) {
    padding: 60px 150px 60px 150px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  gap: 15px;
  height: 90%;
  overflow-y: scroll;

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

export default function Piadas() {
  const [searchBarContent, setSearchBarContent] = useState("");
  const [order, setOrder] = useState("");

  useEffect(() => {
    console.log(order, searchBarContent);
  
  }, [order, searchBarContent]);

  const arrayTeste = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1  ,1,1 ,1,1 ,1 ,1,1 ,1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  
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
            {arrayTeste.map((val) => (
              <Card key={uuidv4()}>{val}</Card>
            ))}
            </CardWrapper>
          </LightBrownMobileWrapper>
        </ContainerStageBackgroundPiadas>
      </main>
    </div>
  );
}

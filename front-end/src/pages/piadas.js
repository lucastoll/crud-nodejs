import { useEffect, useState } from "react";
import Head from "next/head";
import styled from "styled-components";

import { ContainerStageBackground } from "../components/Shared/ContainerStageBackground";
import UtilsWrapper from "../components/UtilsWrapper";

import c from "../../public/styles/colors.json";

const ContainerStageBackgroundPiadas = styled(ContainerStageBackground)`
  height: 100vh;
  padding: 0px;

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
  min-height: 100vh;
  padding: 40px 30px;
  height: fit-content;
  color: black;

  @media screen and (min-width: 1024px) {
    min-height: auto;
    height: 100%;
    border-radius: 30px;
  }

  @media screen and (min-width: 1440px) {
    padding: 60px 150px 0px 150px;
  }
`;

export default function Piadas() {
  const [searchBarContent, setSearchBarContent] = useState("");
  const [order, setOrder] = useState("");

  useEffect(() => {
    console.log(order, searchBarContent);
  
  }, [order, searchBarContent]);
  

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
          </LightBrownMobileWrapper>
        </ContainerStageBackgroundPiadas>
      </main>
    </div>
  );
}

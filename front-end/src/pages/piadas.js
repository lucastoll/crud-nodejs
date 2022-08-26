import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";

import { ContainerStageBackground } from "../components/Shared/styles";
import c from "../../public/styles/colors.json";
import SearchbarIcon from "../../public/components/SearchBar/SearchIcon.png";
import OrderIcon from "../../public/components/Popover/OrderIcon.png";

import * as RadixPopover from "@radix-ui/react-popover";

export const Popover = (props) => {
  const { children } = props;
  return <RadixPopover.Root>{children}</RadixPopover.Root>;
};

const PopoverTrigger = styled(RadixPopover.Trigger)`
  background: #E9E4DA;
  border: 2px solid #DCD8D0;
  padding: 9px 19px 9px 60px;
  font-family: "AvenirBook";
  color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  background-image: url(${OrderIcon.src});
  background-position: 15px center;
  background-repeat: no-repeat;
`

const PopoverArrow = styled(RadixPopover.Arrow)`
  fill: fuchsia;
`;

const LocalPopoverContent = (props) => {
  const { children, ...rest } = props;
  return (
    <RadixPopover.Content {...rest}>
      {children}
      <PopoverArrow />
    </RadixPopover.Content>
  );
};

export const PopoverContent = styled(LocalPopoverContent)`
  background-color: fuchsia;
  padding: 16px;
`;

const ContainerStageBackgroundPiadas = styled(ContainerStageBackground)`
  padding: 0px;
`;

const UtilsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
`;

const Wrapper = styled.div`
  background: ${c.lightBrown};
  width: 100%;
  min-height: 100vh;
  padding: 40px 30px;
  height: fit-content;
  color: black;
`;

export default function Piadas() {
  const [searchBarContent, setSearchBarContent] = useState("");

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
          <Wrapper>
            <UtilsWrapper>
            <Searchbar
              type="text"
              placeholder="Pesquisar piada"
              value={searchBarContent}
              onChange={(event) => setSearchBarContent(event.target.value)}
            ></Searchbar>
            <Popover>
              <PopoverTrigger>
                 Ordenar
              </PopoverTrigger>
              <PopoverContent>The content</PopoverContent>
            </Popover>
            </UtilsWrapper>
          </Wrapper>
        </ContainerStageBackgroundPiadas>
      </main>
    </div>
  );
}

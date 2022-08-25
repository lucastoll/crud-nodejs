import Head from 'next/head'
import Image from 'next/image'
import styled from "styled-components"

import bg from "../public/StageBackground.svg"
import microphone from "../public/Microphone.png"
import frameMicrophoneIcon from "../public/FrameMicrophoneIcon.png"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg.src});
  background-repeat: repeat;
  background-position: center;
  background-size: auto;
  padding: 60px 15px;

  @media screen and (min-width: 1024px) {    
    background-image: url(${microphone.src}), url(${bg.src});
    background-repeat: no-repeat, repeat;
    background-position: 35% bottom, center;
    background-size: auto, auto;
  }
`

const Frame = styled.div`
  width: 100%;
  height: 100%;
  background: #F5F0E6;
  border-radius: 30px;
  padding: 40px 32px;

  display: flex;
  flex-direction: column;
`

const FrameImageContainer = styled.div`

`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Só piada boa</title>
        <meta name="description" content="Aplicação utilizando Banco de dados, CRUD, REST e Next.JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <Frame>
            <Image src={frameMicrophoneIcon.src} alt="" layout="fill"/>
          </Frame>
        </Container>
      </main>
    </div>
  )
}

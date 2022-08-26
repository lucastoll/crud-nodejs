import React from 'react'
import Image from "next/image";
import { useEffect, useState } from "react";

import { Button, Frame, MicrophonePngContainer, MicrophonePngWrapperAbsolute, MicrophoneVectorContainer, Span, Text, Title } from './styles';
import { ContainerStageBackground } from '../Shared/styles';

import MicrophonePng from "../../../public/components/BoasVindas/Microphone.png";
import MicrophoneVector from "../../../public/components/BoasVindas/FrameMicrophoneIcon.png";

export default function BoasVindas() {
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        window.addEventListener("resize", () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        })
    }, [width, height]);

  return (
    <ContainerStageBackground>
          <Frame>
            <MicrophoneVectorContainer>
              <Image src={MicrophoneVector.src} alt="" layout="fill" />
            </MicrophoneVectorContainer>
            <Title>
              SÓ <span>PIADA</span> BOA
            </Title>
            <Text>
              Participe da maior comunidade de piadistas do <strong>Brasil</strong>. Vote nas piadas de outros
              usuários e cadastre suas as suas próprias.
            </Text>
            <Span>
              Só não vá morrer de rir! kkk
            </Span>
            <Button>
              Começar
            </Button>
            {
              (width >= 1024 && height >= 670) &&
              <MicrophonePngWrapperAbsolute>
                <MicrophonePngContainer>
                  <Image src={MicrophonePng.src} layout="fill" alt=""/>
                </MicrophonePngContainer>
              </MicrophonePngWrapperAbsolute>
            }
          </Frame>
        </ContainerStageBackground>
  )
}

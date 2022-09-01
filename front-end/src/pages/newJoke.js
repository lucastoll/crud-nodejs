import { useRouter } from 'next/router';
import React from 'react'
import { ContainerStageBackgroundPiadasNewJoke } from "../components/Shared/ContainerStageBackground";
import { LightBrownMobileWrapperNewJoke } from "../components/Shared/LightMobileWrapper";
import c from "../../public/styles/colors.json"

import styled from "styled-components";
import Link from 'next/link';
import { ButtonCancelJoke, ButtonNewJoke } from '../components/Shared/Button';

import Axios from "axios";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;

    h2{
        font-family: "AvenirBlack";
        color: #C8051BE5;
        font-size: 30px;
        line-height: 41px;
        margin: 0;
        margin-bottom: 24px;
    }
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    label{
        font-size: 14px;
        color: #BAB6AE;
        margin-bottom: 4px;
    }

    input, textarea{
        background: #E9E4DA;
        border-radius: 8px;
        border: 2px solid #DCD8D0;
        margin-bottom: 16px;
        color: ${c.grey};
        font-size: 16px;
        height: 50px;
        outline: none;
        padding: 8px;
        width: 100%;
    }

    textarea{
        height: 175px;
    }
`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 32px;
`

export default function NewJoke() {
    const router = useRouter();

  function postNewJoke(event){
    event.preventDefault();
    const data = new FormData(event.target);

    Axios.post("http://localhost:3006/createJoke", {
        titulo: data.get('title'),
        piada: data.get('joke'),
        autor: data.get('author'),
        likes: 0,
        dislikes: 0
    }).then((response) => {
        console.log(response);
        router.push('/jokes')
    })
  }

  return (
    <ContainerStageBackgroundPiadasNewJoke>
        <LightBrownMobileWrapperNewJoke>
            <Form method="POST" onSubmit={(event) => postNewJoke(event)}>
                <h2>Nova piada</h2>
                <InputContainer>
                    <label htmlFor="#title">Titulo:</label>
                    <input id="title" name="title" required type="text"></input>
                </InputContainer>
                <InputContainer>
                    <label htmlFor="#author">Autor:</label>
                    <input id="author" name="author" required type="text"></input>
                </InputContainer>
                <InputContainer>
                    <label htmlFor="#joke">Piada:</label>
                    <textarea id="joke" name="joke" required type="text"></textarea>
                </InputContainer>
                <ButtonsContainer>
                    <Link href="/jokes">
                        <ButtonCancelJoke className='cancel'>Cancelar</ButtonCancelJoke>
                    </Link>
                    <ButtonNewJoke type="submit">Enviar piada</ButtonNewJoke>
                </ButtonsContainer>
            </Form>
        </LightBrownMobileWrapperNewJoke>
    </ContainerStageBackgroundPiadasNewJoke>
  )
}

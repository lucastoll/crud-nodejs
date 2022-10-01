import React from 'react'
import styled from "styled-components"

import c from "../../../../public/styles/colors.json"
import { Button } from '../../Shared/Button';
import CardContent from '../CardContent';

import Axios from "axios";

const MyModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;

  .modal {
    animation: ${(props) =>
    props.animateModal ? "modal 1s" : `modalLeave 1s forwards`};
    padding: 20px 16px;
    background: ${c.white};
    max-width: 600px;
    border: 2px solid #f2f2f2;
    border-radius: 8px;
    width: 100%;

      h2{
        color: #C8051BE5;
        font-size: 16px;
        font-family: "AvenirBlack";
      }

    @keyframes modal {
      from {
        transform: translate(0, 100vh);
      }
      to {
        transform: translate(0, 0);
      }
    }

    @keyframes modalLeave {
      from {
        transform: translate(0, 0);
      }
      to {
        transform: translate(0, 100vh);
      }
    }
  }
`;

const CardPopoverButtons = styled.div`
  width: 100%; 
  margin-top: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: 60px 0;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  flex-direction: column;

  div{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 16px;
  }

  span{
    text-align: center;
    text-decoration: underline;
    font-style: italic;
  }
`

export default function CardPopover({data, closeModal, animateModal, fetchData}) {
    React.useEffect(() => {
    document.addEventListener("click", (e) => {
        if (e.target.id == "containerpopup" || e.target.id == "botaopopup")
        closeModal();
    });

    return () => {
        document.addEventListener("click", (e) => {
        if (e.target.id == "containerpopup" || e.target.id == "botaopopup")
            closeModal();
        });
    };
    }, [closeModal]);

    function addLike(){
      Axios.put("http://localhost:3006/updateJoke", {
        attributeName: "likes",
        attributeValue: data.likes + 1,
        id: data.id
    }).then((response) => {
        fetchData("getJokes");
        console.log(response);
    })
    }

    function addDislike(){
      Axios.put("http://localhost:3006/updateJoke", {
        attributeName: "dislikes",
        attributeValue: data.dislikes + 1,
        id: data.id
    }).then((response) => {
        fetchData("getJokes");
        console.log(response);
    })
    }

    function deleteJoke(){
      Axios.delete(`http://localhost:3006/deleteJoke/${data.id}`)
      .then((response) => {
        fetchData("getJokes");
        console.log(response);
    })
    }

  return (
    <MyModal id="containerpopup" animateModal={animateModal}>
      <div className="modal">
        <CardContent data={data} />
        <CardPopoverButtons>
          <div>
            <Button id="botaopopup" onClick={addLike} backgroundColor={c.green} maxWidth="154px">Chorei</Button>
            <Button id="botaopopup" onClick={addDislike} maxWidth="154px">Nem ri</Button>
          </div>
          <span id="botaopopup" onClick={deleteJoke}>Denunciar</span>
        </CardPopoverButtons>
      </div>
    </MyModal>
  )
}

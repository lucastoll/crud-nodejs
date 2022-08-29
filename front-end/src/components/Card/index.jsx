import React from "react";
import styled from "styled-components";
import c from "../../../public/styles/colors.json";

import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

import Like from "../../../public/components/Card/like.png";
import Deslike from "../../../public/components/Card/deslike.png";

const Container = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px #0000000D;
`;

const CardTitle = styled.h2`
  color: ${c.primary};
  font-family: "AvenirBlack";
  font-size: 20px;
`;

const CardDescription = styled.p`
  color: ${c.grey};
  font-family: "AvenirRoman";
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 22px;
`;

const CardInfos = styled.div`
  display: flex;
  justify-content: space-between;

  .user{
    color: #1668c3;
    font-size: 16px;
    line-height: 22px;
  }

  .date{
    font-family: "AvenirBlack";
    color: rgba(0, 0, 0, 0.2);
  }
`

const CardFeedback = styled.div`
  display: flex;
  height: 20px;
  gap: 24px;
  font-family: "AvenirBlack";

  div{
    display: flex;
    gap: 8px;
  }

  .thumbsUp span{
    color: ${c.green};
  }

  .thumbsDown span{
    color: ${c.primary};
  }
`

export default function Card() {
  return (
    <Container>
      <CardTitle>Piada 1</CardTitle>
      <CardDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac pharetra mauris. Sed
        laoreet, magna eu tincidunt hendrerit, dui est accumsan leo, ut vehicula dolor lectus sed
        orci. Etiam id iaculis orci, ac semper metus. In nec elit tempor, efficitur sem a, finibus
        purus. Pellentesque at nulla nec felis...
      </CardDescription>
      <CardInfos>
        <span className="user">Usuário da silva</span>
        <CardFeedback>
            <div className="thumbsUp">
                <FontAwesomeIcon icon={faThumbsUp} size="1x" style={{color: "rgba(0, 0, 0, 0.2)"}}/>
                <span>232</span>
            </div>
            <div className="thumbsDown">
                <FontAwesomeIcon icon={faThumbsDown} size="1x" style={{color: "rgba(0, 0, 0, 0.2)"}}/>
                <span>13</span>
            </div>
        </CardFeedback>
        <span className="date">Publicada em 24/02/2019</span>
      </CardInfos>
    </Container>
  );
}

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import c from "../../../public/styles/colors.json";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'


const Container = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px #0000000D;

  .titleDateWrapper{
    display: flex;
    gap: 8px;
    justify-content: space-between;
    align-items: center;
  }
`;

const CardTitle = styled.h2`
  color: ${c.primary};
  font-family: "AvenirBlack";
  font-size: 16px;

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;

const CardDescription = styled.p`
  color: ${c.grey};
  font-family: "AvenirRoman";
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 22px;

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;

const CardInfos = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  gap: 8px;

  .author{
    color: #1668c3;
    line-height: 22px;
  }

  .specialAuthor{
    color: #000000;
    font-family: "AvenirBlack";
    font-style: oblique;

    span{
      text-decoration: underline;
    }
  }

  .date{
    font-family: "AvenirBlack";
    color: rgba(0, 0, 0, 0.2);
  }

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`

const CardFeedback = styled.div`
  display: flex;
  height: 20px;
  gap: 8px;
  font-family: "AvenirBlack";
  font-size: 14px;

  div{
    display: flex;
    gap: 4px;
  }

  .thumbsUp span{
    color: ${c.green};
  }

  .thumbsDown span{
    color: ${c.primary};
  }

  @media screen and (min-width: 1024px) {
    font-size: 20px;
    gap: 24px;

    div{
    gap: 8px;
  }
  }
`
const Date = styled.span`
    font-family: "AvenirBlack";
    color: rgba(0, 0, 0, 0.2);
    font-size: 12px;

    @media screen and (min-width: 1024px) {
      font-size: 16px;
    }
`

export default function Card({data}) {
  let dataPublicacao = data.dataPublicacao; // 2022-08-30T17:38:58.000Z
  let dataSplitYearMonth = dataPublicacao.split('-'); // ['2022', '08', '30T17:38:58.000Z']
  let dataSplitDay = dataSplitYearMonth[2].split('T'); // ['30', '17:38:58.000Z']
  let dataDDMMYYYY = [dataSplitDay[0], dataSplitYearMonth[1], dataSplitYearMonth[0]];

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth)
    })
  }, [width])


  return (
    <Container>
      <div className="titleDateWrapper">
        <CardTitle>{data.titulo}</CardTitle>
        { width < 1024 && <Date>{dataDDMMYYYY[0]}/{dataDDMMYYYY[1]}/{dataDDMMYYYY[2]}</Date> }
      </div>
      <CardDescription>
        {data.piada}
      </CardDescription>
      <CardInfos>
        {data.autor != "Bia Martinez" ?
          <span className="author">
            {data.autor}
          </span>
          :
          <span className="specialAuthor">
            ⭐<span>{data.autor}</span>⭐
          </span>
        }
        <CardFeedback>
            <div className="thumbsUp">
                <FontAwesomeIcon icon={faThumbsUp} size="1x" style={{color: "rgba(0, 0, 0, 0.2)"}}/>
                <span>{data.likes}</span>
            </div>
            <div className="thumbsDown">
                <FontAwesomeIcon icon={faThumbsDown} size="1x" style={{color: "rgba(0, 0, 0, 0.2)"}}/>
                <span>{data.dislikes}</span>
            </div>
        </CardFeedback>
        { width >= 1024 && <Date>Publicada em {dataDDMMYYYY[0]}/{dataDDMMYYYY[1]}/{dataDDMMYYYY[2]}</Date> }
      </CardInfos>
    </Container>
  );
}

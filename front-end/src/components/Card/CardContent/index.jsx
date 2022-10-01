import React, { useEffect, useState } from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { CardDescription, CardFeedback, CardInfos, CardTitle, Date, TitleDateWrapper } from "./styles";

export default function CardContent({ data }) {
const [width, setWidth] = useState(window.innerWidth);
let dataPublicacao = data.createdAt; // 2022-08-30T17:38:58.000Z
let dataSplitYearMonth = dataPublicacao.split('-'); // ['2022', '08', '30T17:38:58.000Z']
let dataSplitDay = dataSplitYearMonth[2].split('T'); // ['30', '17:38:58.000Z']
let dataDDMMYYYY = [dataSplitDay[0], dataSplitYearMonth[1], dataSplitYearMonth[0]];

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [width]);

  return (
    <>
      <TitleDateWrapper>
        <CardTitle>{data.titulo}</CardTitle>
        {width < 1024 && (
          <Date>
            {dataDDMMYYYY[0]}/{dataDDMMYYYY[1]}/{dataDDMMYYYY[2]}
          </Date>
        )}
      </TitleDateWrapper>
      <CardDescription>{data.piada}</CardDescription>
      <CardInfos>
        {data.autor != "Bia Martinez" ? (
          <span className="author">{data.autor}</span>
        ) : (
          <span className="specialAuthor">
            ⭐<span>{data.autor}</span>⭐
          </span>
        )}
        <CardFeedback>
          <div className="thumbsUp">
            <FontAwesomeIcon icon={faThumbsUp} size="1x" style={{ color: "rgba(0, 0, 0, 0.2)" }} />
            <span>{data.likes}</span>
          </div>
          <div className="thumbsDown">
            <FontAwesomeIcon
              icon={faThumbsDown}
              size="1x"
              style={{ color: "rgba(0, 0, 0, 0.2)" }}
            />
            <span>{data.dislikes}</span>
          </div>
        </CardFeedback>
        {width >= 1024 && (
          <Date>
            Publicada em {dataDDMMYYYY[0]}/{dataDDMMYYYY[1]}/{dataDDMMYYYY[2]}
          </Date>
        )}
      </CardInfos>
    </>
  );
}

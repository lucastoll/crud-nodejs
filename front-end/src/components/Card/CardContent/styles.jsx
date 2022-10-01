import styled from "styled-components";
import c from "../../../../public/styles/colors.json";

export const Container = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px #0000000D;
`;

export const TitleDateWrapper = styled.div`
    display: flex; 
    gap: 8px;
    justify-content: space-between;
    align-items: center;
`

export const CardTitle = styled.h2`
  color: ${c.primary};
  font-family: "AvenirBlack";
  font-size: 16px;

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const CardDescription = styled.p`
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

export const CardInfos = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  gap: 8px;

  .author{
    color: #1668c3;
    line-height: 22px;
    width: 200px;
  }

  .specialAuthor{
    color: #000000;
    font-family: "AvenirBlack";
    font-style: oblique;
    width: 200px;

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

export const CardFeedback = styled.div`
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
export const Date = styled.span`
    font-family: "AvenirBlack";
    color: rgba(0, 0, 0, 0.2);
    font-size: 12px;

    @media screen and (min-width: 1024px) {
      font-size: 16px;
    }
`

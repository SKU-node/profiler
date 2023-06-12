import Container from "./Container";
import styled from "styled-components";
import Typo from "./Typo";
import CLink from "./CLink";
import React from "react";

const Body = styled(Container)`
  width: 27vw;
  height: 32vh;
  background-color: #dddddd;
  border-radius: 10px;
  margin-right: 2vw;
  margin-top: 2vh;
  cursor: pointer;
`;

const Blank = styled(Body)`
  justify-content: center;
  align-items: center;
`;

const TitleTypo = styled(Typo)`
  margin-left: 1vh;
`;

const ContTypo = styled(Typo)`
  margin: 1vh;
`;

const CardBox = styled(Container)`
  background-color: white;
  margin: 1vh 0 0 1.5vw;
  border-radius: 10px;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled(CardBox)`
  margin-top: 2vh;
  width: 10vw;
  height: 4vh;
`;

const Contents = styled(CardBox)`
  width: 24vw;
  height: 23vh;
  justify-content: flex-start;
  align-items: flex-start;
`;

function GraphCard({ data }) {
  if (data) {
    const create = data.createdAt.split("").filter((_, i) => i < 10);
    const udpate = data.updatedAt.split("").filter((_, i) => i < 10);
    return (
      <CLink to={`../graph/${data.postId}`}>
        <Body dir="column">
          <Title>
            <TitleTypo size="24px">{data.name}</TitleTypo>
          </Title>
          <Contents dir="column">
            <ContTypo size="18px">CREATED_AT : {create}</ContTypo>
            <ContTypo size="18px">UPDATED_AT : {udpate}</ContTypo>
          </Contents>
        </Body>
      </CLink>
    );
  } else
    return (
      <CLink to="../new">
        <Blank>
          <Typo size="50px">+</Typo>
        </Blank>
      </CLink>
    );
}

export default GraphCard;

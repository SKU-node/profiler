import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

import Barchart from "../component/Charts/BarChart";
import LineChart from "../component/Charts/LineChart";
import RadarChart from "../component/Charts/RadarChart";
import barDataChanger from "../utils/barDataChanger";
import lineDataChanger from "../utils/lineDataChanger";
import RadarDataChanger from "../utils/RadarDataChanger";
import dataChanger from "../utils/dataChanger";
import Typo from "../component/Typo";
import Button from "../component/Button";
import Container from "../component/Container";
import api from "../utils/api";

const GraphBody = styled(Container)`
  flex-direction: column;
  margin-top: 2vh;
  background-color: #dedede;
  border-radius: 10px;
  width: 80vw;
  height: 64vh;
`;

const GraphHeader = styled(Container)`
  width: 100%;
  height: 4vh;
  background-color: #b8b8b8;
  border-radius: 10px 10px 0 0;
  align-items: center;
`;

const GrapContent = styled(Container)`
  width: 80vw;
  height: 60vh;
  overflow-x: auto;
  overflow-y: hidden;
`;

const GrapBox = styled(Container)`
  flex-direction: column;
  width: 80vw;
  height: 50vh;
`;

function GraphMinMax({ mode, data }) {
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(Number.POSITIVE_INFINITY);

  useEffect(() => {
    const arr = [];

    const arrSetter = {
      bar: () => data.forEach((e) => arr.push(e.performance)),
      line: () => data.forEach((e) => arr.push(...e.values)),
      radar: () => data.forEach((e) => arr.push(...e.values)),
    };

    arrSetter[mode]();

    setMin(Math.min(...arr));
    setMax(Math.max(...arr));
  }, [data, mode]);

  return (
    <Container margin="20px 0 -20px 20px">
      <Typo margin="0 20px"> MAX: {max}</Typo>
      <Typo>MIN: {min}</Typo>
    </Container>
  );
}

const graphs = {
  bar: (graph, select, setSelect) => {
    return (
      <GraphBody>
        <GraphHeader>
          {graph.value.map((_, i) => (
            <Typo
              margin="10px"
              size={i - select === 0 ? "20px" : "14px"}
              id={i}
              cursor="pointer"
              onClick={(e) => setSelect(e.target.id)}
              key={i}
            >
              data {i + 1}
            </Typo>
          ))}
        </GraphHeader>
        <GrapContent>
          {barDataChanger(graph.value[select]).map((e, i) => (
            <GrapBox key={i}>
              <GraphMinMax data={e.values} mode="bar" />
              <Typo margin="20px auto 0 auto" size="20px">
                {e.title}
              </Typo>
              <Barchart barData={e} />
            </GrapBox>
          ))}
        </GrapContent>
      </GraphBody>
    );
  },
  line: (graph, select, setSelect) => {
    return (
      <GraphBody>
        <GraphHeader>
          {graph.value.map((_, i) => (
            <Typo
              margin="10px"
              size={i - select === 0 ? "20px" : "14px"}
              id={i}
              cursor="pointer"
              onClick={(e) => setSelect(e.target.id)}
              key={i}
            >
              data {i + 1}
            </Typo>
          ))}
        </GraphHeader>
        <GrapContent>
          <GrapBox>
            <Typo margin="20px auto 0 auto" size="20px">
              {`graph no ${Number(select) + 1}`}
            </Typo>
            <GraphMinMax data={graph.value[select]} mode="line" />
            <LineChart lineData={lineDataChanger(graph.value[select])} />
          </GrapBox>
        </GrapContent>
      </GraphBody>
    );
  },
  radar: (graph, select, setSelect) => {
    return (
      <GraphBody>
        <GraphHeader>
          {graph.value.map((_, i) => (
            <Typo
              margin="10px"
              size={i - select === 0 ? "20px" : "14px"}
              id={i}
              cursor="pointer"
              onClick={(e) => setSelect(e.target.id)}
              key={i}
            >
              data {i + 1}
            </Typo>
          ))}
        </GraphHeader>
        <GrapContent>
          <GrapBox>
            <Typo margin="20px auto 0 auto" size="20px">
              {`graph no ${Number(select) + 1}`}
            </Typo>
            <GraphMinMax data={graph.value[select]} mode="line" />
            <RadarChart radarData={RadarDataChanger(graph.value[select])} />
          </GrapBox>
        </GrapContent>
      </GraphBody>
    );
  },
};

function Graph() {
  const [mode, setMode] = useState("bar");
  const [select, setSelect] = useState(0);
  const [graph, setGraph] = useState("");
  const param = useLocation().pathname.split("/")[2];

  useEffect(() => {
    const fetch = async () => {
      const result = await api.get(`graph?postId=${param}`);
      const pureValue = result.data.result.value;
      setGraph(dataChanger(pureValue));
      console.log(graph[select]);
    };
    fetch();
  }, []);

  const onBarClick = () => setMode("bar");
  const onLineClick = () => setMode("line");
  const onRadarClick = () => setMode("radar");

  if (graph)
    return (
      <div>
        <Typo size="32px">{}</Typo>
        <Container>
          <Button margin="10px 10px 10px 0" value="bar" onClick={onBarClick} />
          <Button margin="10px 10px 10px 0" value="line" onClick={onLineClick} />
          <Button margin="10px 10px 10px 0" value="radar" onClick={onRadarClick} />
        </Container>
        {/* {graphs[mode](graph, select, setSelect)} */}
      </div>
    );
}

export default Graph;

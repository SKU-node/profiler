import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Barchart from "../component/Charts/BarChart";
import LineChart from "../component/Charts/LineChart";
import Typo from "../component/Typo";
import Button from "../component/Button";
import Container from "../component/Container";
import barDataChanger from "../utils/barDataChanger";
import lineDataChanger from "../utils/lineDataChanger";

const GraphBody = styled(Container)`
  flex-direction: column;
  margin-top: 2vh;
  background-color: #dedede;
  border-radius: 10px;
  width: 80vw;
  height: 60vh;
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
  height: 56vh;
  overflow-x: auto;
  overflow-y: hidden;
`;

const GrapBox = styled(Container)`
  flex-direction: column;
  width: 80vw;
  height: 50vh;
`;

function Graph() {
  const [mode, setMode] = useState(true); // true === bar mode
  const [select, setSelect] = useState(0);
  const graphName = useParams();
  const graph = useSelector((state) => state.graph.data[graphName.id - 1]);

  const onBarClick = () => setMode(true);
  const onLineClick = () => setMode(false);

  if (graph)
    return (
      <div>
        <Typo size="32px">{graph.title}</Typo>
        <Container>
          <Button margin="10px 10px 10px 0" value="bar" onClick={onBarClick} />
          <Button margin="10px 10px 10px 0" value="line" onClick={onLineClick} />
        </Container>
        {mode ? (
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
              {barDataChanger(graph.value[select]).map((e) => (
                <GrapBox>
                  <Typo margin="20px auto 0 auto" size="20px">
                    {e.title}
                  </Typo>
                  <Barchart barData={e} />
                </GrapBox>
              ))}
            </GrapContent>
          </GraphBody>
        ) : (
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
                <LineChart lineData={lineDataChanger(graph.value[select])} />
              </GrapBox>
            </GrapContent>
          </GraphBody>
        )}
      </div>
    );
}

export default Graph;

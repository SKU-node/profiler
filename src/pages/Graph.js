import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Typo from "../component/Typo";
import Button from "../component/Button";
import Container from "../component/Container";

function Graph() {
  const a = useParams();
  const graph = useSelector((state) => state.graph.data[a.id - 1]);

  if (graph)
    return (
      <div>
        <Typo size="32px">{graph.title}</Typo>
        <Container>
          <Button margin="10px 10px 10px 0" value="bar" />
          <Button margin="10px 10px 10px 0" value="line" />
        </Container>
      </div>
    );
}

export default Graph;

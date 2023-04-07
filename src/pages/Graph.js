import { useParams } from "react-router-dom";

function Graph() {
  const a = useParams();

  console.log(a);
  return <div>hello</div>;
}

export default Graph;

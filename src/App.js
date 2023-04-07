import { Route, Routes } from "react-router-dom";
import BarChart from "./component/BarChart";
import { LineChart } from "./component/LineChart";
import Graph from "./pages/Graph";
import Main from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route index />
      <Route path="/new" element={<Main />} />
      <Route path="/graph/:id" elemet={<Graph />} />
    </Routes>
  );
}

export default App;

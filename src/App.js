import { Route, Routes } from "react-router-dom";
import Graph from "./pages/Graph";
import Main from "./pages/Main";
import Header from "./component/Header";
import Redirector from "./utils/Redirector";
import New from "./pages/New";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/main" element={<Main />} />
        <Route path="/graph/:id" element={<Graph />} />
        <Route path="/new" element={<New />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}/>
        <Route path="*" element={<Redirector />} />
      </Route>
      <Route path="*" element={<Redirector />} />
    </Routes>
  );
}

export default App;

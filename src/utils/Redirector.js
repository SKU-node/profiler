import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

function Redirector() {
  const nav = useNavigate();

  useEffect(() => {
    nav("main");
  }, [nav]);

  return <Outlet />;
}

export default Redirector;

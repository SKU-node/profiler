import { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

function Redirector() {
  const nav = useNavigate();
  const loc = useLocation().pathname.split("/");

  useEffect(() => {
    loc.shift();
    let http = "";
    for (let i = 0; i < loc.length; i++) http += "../";
    nav(http);
  }, []);

  return <Outlet />;
}

export default Redirector;

import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import React from "react";

function Redirector() {
  const nav = useNavigate();

  useEffect(() => {
    nav("main");
  }, [nav]);

  return <Outlet />;
}

export default Redirector;

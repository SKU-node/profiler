import styled from "styled-components";
import GraphCard from "../component/GraphCard";
import Container from "../component/Container";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import userSlice from "../store/userSlice";
import graphSlice from "../store/graphSlice";
import api from "../utils/api";

const Body = styled(Container)`
  margin-top: 2vh;
  flex-wrap: wrap;
`;

function Main() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const graph = useSelector((state) => state.graph.data);

  useEffect(() => {
    dispatch(userSlice.actions.getUser());
  }, []);

  useEffect(() => {
    const fetch = async () => {
      try {
        if (userData.id) {
          const result = await api(`graph?uuid=${userData.id}`);
          dispatch(graphSlice.actions.setGraph(await result.data.result));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [userData]);

  return <Body>{userData.id && [undefined, ...graph].map((e, i) => <GraphCard key={i} data={e} />)}</Body>;
}

export default Main;

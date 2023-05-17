import Container from "../component/Container";
import styled from "styled-components";
import TextBox from "../component/TextBox";
import Typo from "../component/Typo";
import Button from "../component/Button";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import graphSlice from "../store/graphSlice";
import dataChanger from "../utils/dataChangerVer2";
import { useNavigate } from "react-router-dom";

const Body = styled(Container)`
  margin-top: 5vh;
`;

const DataBody = styled(Container)`
  margin-top: 2vh;
  background-color: #dedede;
  border-radius: 10px;
  width: 50vw;
  height: 50vh;
`;

const DataTitle = styled(Typo)`
  font-size: 30px;
  margin-left: 1vw;
`;

const DataHeader = styled(Container)`
  width: 100%;
  height: 4vh;
  background-color: #b8b8b8;
  border-radius: 10px 10px 0 0;
  align-items: center;
`;

function New() {
  const graph = useSelector((state) => state.graph.data);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");

  const onFileNmaeChange = (e) => setTitle(e.target.value);

  const onFileChange = (e) => {
    const reader = new FileReader();
    reader.onload = (e) => setFile(e.target.result);
    reader.readAsText(e.target.files[0]);
  };

  const onSubmitClick = () => {
    if (file && title) {
      const result = dataChanger(file);
      const today = new Date().getDate();

      const obj = { title: title, value: result, created_at: today, updated_at: today };
      dispatch(graphSlice.actions.setGraph([...graph, obj]));
      nav("../main");
    }
  };

  return (
    <Container>
      <Body dir="column">
        <TextBox placeholder="FILENAME" onChange={onFileNmaeChange} />
        <DataBody dir="column">
          <DataHeader>
            <DataTitle>DATA</DataTitle>
          </DataHeader>
          <input type="file" onChange={onFileChange} />
          <Button onClick={onSubmitClick} value="SUBMIT" />
        </DataBody>
      </Body>
    </Container>
  );
}

export default New;

import styled from "styled-components";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Container from "../component/Container";
import TextBox from "../component/TextBox";
import Typo from "../component/Typo";
import Button from "../component/Button";
import api from "../utils/api";

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
  const user = useSelector((state) => state.user);
  const nav = useNavigate();
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");

  const onFileNmaeChange = (e) => setTitle(e.target.value);

  const onFileChange = (e) => {
    const reader = new FileReader();
    reader.onload = (e) => setFile(e.target.result);

    if (typeof e.target.files[0] !== "object") return;
    else reader.readAsText(e.target.files[0]);
  };

  const onSubmitClick = async () => {
    if (title)
      if (file) {
        const obj = { uuid: user.id, name: title, value: file };
        await api.post("graph", obj);
        nav("../main");
      } else alert("please upload file");
    else alert("please type title of graph");
  };

  return (
    <Container>
      <Body dir="column">
        <TextBox placeholder="FILENAME" onChange={onFileNmaeChange} />
        <DataBody dir="column">
          <DataHeader>
            <DataTitle>DATA</DataTitle>
          </DataHeader>
          <Container dir="column" margin="18vh 0 0 18vw">
            <input type="file" onChange={onFileChange} />
            <Button margin="3vw" onClick={onSubmitClick} value="SUBMIT" />
          </Container>
        </DataBody>
      </Body>
    </Container>
  );
}

export default New;

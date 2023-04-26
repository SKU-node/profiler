import Container from "../component/Container";
import styled from "styled-components";
import TextBox from "../component/TextBox";
import Typo from "../component/Typo";
import Button from "../component/Button";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import fileSlice from "../store/fileSlice";
import { setCookie } from "../utils/cookie";
import dataChanger from "../utils/dataChanger";

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
  const dispatch = useDispatch();

  const file = useSelector((state) => state.file);

  const onChange = (e) => {
    const reader = new FileReader();
    reader.onload = (v) => dispatch(fileSlice.actions.setFile(v.target.result));
    reader.readAsText(e.target.files[0]);
  };

  const onClick = () => {
    setCookie(dataChanger(file.file));
    console.log(dataChanger(file.file));
  };

  return (
    <Container>
      <Body dir="column">
        <TextBox placeholder="FILENAME" />
        <DataBody dir="column">
          <DataHeader>
            <DataTitle>DATA</DataTitle>
          </DataHeader>
          <input type="file" onChange={onChange} />
          <Button onClick={onClick} value="SUBMIT" />
        </DataBody>
      </Body>
    </Container>
  );
}

export default New;

import Container from "../../component/Container";
import TextBox from "../../component/TextBox";
import Button from "../../component/Button";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fileSlice from "../../store/fileSlice";
import { Body, DataBody, DataContents, DataHeader, DataMenu, DataMenuTitle, DataTitle, Graph } from "./style";

// import { setCookie } from "../../utils/cookie";
// import dataChanger from "../../utils/dataChanger";

function New() {
  const dispatch = useDispatch();
  const [menu, setMenu] = useState("INPUT");
  const [data, setData] = useState([{ core: 0, task: 0 }]);

  // const file = useSelector((state) => state.file);

  const onChange = (e) => {
    const reader = new FileReader();
    reader.onload = (v) => dispatch(fileSlice.actions.setFile(v.target.result));
    reader.readAsText(e.target.files[0]);
  };

  const onSubmitClick = () => {
    // setCookie(dataChanger(file.file));
    // console.log(dataChanger(file.file));
  };

  const onMenuClick = (e) => setMenu(e.target.innerHTML);
  const onAddClick = (e) => {
    const temp = [...data, { core: 0, task: 0 }];
    setData(temp);
  };

  const onButtonClick = (e) => {
    const num = e.target.id;
    const temp = { ...data[num] };
    temp[e.target.innerHTML.toLowerCase()] += 1;
    setData(temp);
  };

  return (
    <Container>
      <Body dir="column">
        <TextBox placeholder="FILENAME" />
        <DataBody dir="column">
          <DataHeader>
            <DataTitle>DATA</DataTitle>
          </DataHeader>
          <DataMenu>
            <DataMenuTitle isActive={menu !== "INPUT"} onClick={onMenuClick}>
              INPUT
            </DataMenuTitle>
            <DataMenuTitle isActive={menu !== "FILE"} onClick={onMenuClick}>
              FILE
            </DataMenuTitle>
          </DataMenu>
          {menu === "FILE" ? (
            <DataContents dir="column">
              <input type="file" onChange={onChange} />
              <Button margin="10px" onClick={onSubmitClick} value="SUBMIT" />
            </DataContents>
          ) : (
            <DataContents dir="column">
              {Array.from({ length: data.length }, (e, i) => (
                <Graph id={i} task={data.task} core={data.core} />
              ))}
              <Container>
                <Button margin="10px" onClick={onButtonClick} value="TASK" />
                <Button margin="10px" onClick={onButtonClick} value="CORE" />
              </Container>
              <Container>
                <Button margin="10px" onClick={onAddClick} value="ADD" />
                <Button margin="10px" onClick={onSubmitClick} value="SUBMIT" />
              </Container>
            </DataContents>
          )}
        </DataBody>
      </Body>
    </Container>
  );
}

export default New;

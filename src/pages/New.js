import Container from "../component/Container";
import styled from "styled-components";
import TextBox from "../component/TextBox";
import Typo from "../component/Typo";
import Button from "../component/Button";

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

const DTextBox = styled(TextBox)`
  margin: 2vh 0 0 1vw;
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
  return (
    <Container>
      <Body dir="column">
        <TextBox placeholder="FILENAME" />
        <DataBody dir="column">
          <DataHeader>
            <DataTitle>DATA</DataTitle>
          </DataHeader>
          <input type="file" />
          <Button value="SUBMIT" />
        </DataBody>
      </Body>
    </Container>
  );
}

export default New;

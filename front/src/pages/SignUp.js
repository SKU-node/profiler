import { useState } from "react";
import Button from "../component/Button";
import Container from "../component/Container";
import TextBox from "../component/TextBox";

function SignUp() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("");

  const onIdChnage = (e) => setId(e.target.value);
  const onPasswordChnage = (e) => setPassword(e.target.value);
  const onCpasswordChnage = (e) => setCpassword(e.target.value);
  const onsubmit = () => {
    // need duplicate check
    if (password === cPassword) console.log(id, password, cPassword);
  };

  return (
    <Container dir="column">
      <TextBox value={id} onChange={onIdChnage} margin="10px 0" placeholder="id" />
      <TextBox value={password} onChange={onPasswordChnage} margin="10px 0" placeholder="password" type="password" />
      <TextBox
        value={cPassword}
        onChange={onCpasswordChnage}
        margin="10px 0"
        placeholder="confirm password"
        type="password"
      />
      <Button onClick={onsubmit} margin="10px 0" value="SIGN UP" />
    </Container>
  );
}

export default SignUp;

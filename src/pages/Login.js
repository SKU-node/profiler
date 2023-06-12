import { useState } from "react";
import Button from "../component/Button";
import Container from "../component/Container";
import TextBox from "../component/TextBox";
import { useDispatch } from "react-redux";
import userSlice from "../store/userSlice";

function SignUp() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onIdChnage = (e) => setId(e.target.value);
  const onPasswordChnage = (e) => setPassword(e.target.value);

  const onsubmit = () => {
    dispatch(userSlice.actions.setUser(id));
    console.log(id, password);
  };

  return (
    <Container dir="column">
      <TextBox value={id} onChange={onIdChnage} margin="10px 0" placeholder="id" />
      <TextBox value={password} onChange={onPasswordChnage} margin="10px 0" placeholder="password" type="password" />
      <Button onClick={onsubmit} margin="10px 0" value="LOGIN" />
    </Container>
  );
}

export default SignUp;

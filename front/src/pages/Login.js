import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../component/Button";
import Container from "../component/Container";
import TextBox from "../component/TextBox";
import userSlice from "../store/userSlice";
import api from "../utils/api";

function SignUp() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();

  const onIdChnage = (e) => setId(e.target.value);
  const onPasswordChnage = (e) => setPassword(e.target.value);

  const onsubmit = async () => {
    try {
      const res = await api.post("user/signin", { userId: id, password: password });
      dispatch(userSlice.actions.setUser(res.data));
      nav("/main");
    } catch (error) {
      alert(error.response.data);
    }
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

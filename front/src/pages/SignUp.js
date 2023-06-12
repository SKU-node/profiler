import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../component/Button";
import Container from "../component/Container";
import TextBox from "../component/TextBox";
import api from "../utils/api";

function SignUp() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("");
  const nav = useNavigate();

  const onIdChnage = (e) => setId(e.target.value);
  const onPasswordChnage = (e) => setPassword(e.target.value);
  const onCpasswordChnage = (e) => setCpassword(e.target.value);
  const onsubmit = async () => {
    try {
      let result;

      if (id && password && cPassword)
        if (password === cPassword) {
          const is_unique = await api.get(`user?userId=${id}`);
          if (is_unique) result = (await api.post("user/signup", { userId: id, password: password })).data.result;
          else result = "duplicated id!!";
        } else result = "check password again!!";
      else result = "values can't be null!!";

      alert(result);
      if (result === "complete") nav("/main");
    } catch (error) {
      alert(error.response.data);
    }
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

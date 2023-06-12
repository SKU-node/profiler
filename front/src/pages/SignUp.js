import { useState } from "react";
import Button from "../component/Button";
import Container from "../component/Container";
import TextBox from "../component/TextBox";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

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
      const is_unique = await api.get(`user?userId=${id}`);
      if (is_unique) {
        if (password === cPassword) result = await api.post("signup", { userId: id, password: password });
        else result = "check password again!!";
      } else result = "duplicated id!!";

      alert(result);
      if (result === "complete") nav("/");
    } catch (error) {
      console.log(error);
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

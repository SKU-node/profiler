import React, { useState } from 'react';
import TextBox from '../component/TextBox';
import Container from '../component/Container';
import styled from "styled-components";
import Typo from '../component/Typo';
import Button from '../component/Button';
import { useNavigate } from "react-router-dom";

const Body = styled(Container)`
  margin-top: 5vh;
`;
const Title=styled(Typo)`
  font-size:24px;
`;



function Login() {
  const nav=useNavigate();

  const handleRegister=()=>{
    nav('/Register');
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 로그인 처리 로직 추가
    console.log(`이메일: ${email}, 비밀번호: ${password}`);
  };

  const onEmailChange = (e) => setEmail(e.target.value);
  const onPassWordChange = (e) => setPassword(e.target.value);
  return (
    <Container>
      <Body dir="column">
        <Title htmlfor="email">이메일</Title>
        <TextBox placeholder="email" onChange={onEmailChange} />
        <Title htmlfor="password">패스워드</Title>
        <TextBox type="password" placeholder="password" onChange={onPassWordChange} />
        <Body dir="row">
          <Button value="로그인" margin="0 10px 0 0" onClick={handleSubmit}/>
          <Button value="회원가입" onClick={handleRegister}/>
        </Body>
      </Body>
    </Container>
  );
}

export default Login;
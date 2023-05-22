import React, { useState } from 'react';
import TextBox from '../component/TextBox';
import Container from '../component/Container';
import styled from "styled-components";
import Typo from '../component/Typo';
import Button from '../component/Button';
import { useNavigate } from 'react-router-dom';

const Body = styled(Container)`
  margin-top: 5vh;
`;
const Title=styled(Typo)`
  font-size:24px;
`;

const RegisterUsers = () => {
    const nav=useNavigate();

    const handleLoginBack=()=>{
        nav('/login');
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    
    const handleEmailVerification = async () => {
      try {
        const response = await fetch(`http://localhost:6639/handleEmailVer?email=${email}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',
        mode: 'cors',},
        });
        const data = await response.json();
        if (data.success) {
          alert('인증코드가 이메일로 전송되었습니다.');
        } else {
          alert('이메일 전송 실패. 다시 시도하세요.');
        }
      } catch (error) {
        console.error(error);
        alert('서버 오류, 다시 시도하세요.');
      }
    };

    const verifyEmail = async () => {
      try {
        const response = await fetch('http://localhost:6639/verify-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, verificationCode }),
          mode: 'cors',
        });
        const data = await response.json();
        if (data.success) {
          return true;
        } else {
          alert('인증 코드 불일치, 다시 시도하세요.');
          return false;
        }
      } catch (error) {
        console.error(error);
        alert('서버 오류, 다시 시도하세요.');
        return false;
      }
    };
    
    const PasswordChecker=async(e)=>{
      e.preventDefault();
      if (password !== passwordCheck) {
        alert('비밀번호와 비밀번호 확인란이 일치하지 않습니다.');
        return false;
      }
    };
    const filledCheck = () => {
      if (email === "" || password === "" || passwordCheck === "" || verificationCode === "") {
        alert("모든 필드를 채워주세요.");
        return false;
      }
      return true;
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      if(PasswordChecker()===false){
        return;
      }
      const emailVerified = await verifyEmail();
      if (!emailVerified()) return;
      if (!filledCheck()) return;
      const response = await fetch('http://localhost:6639/CreateUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        mode: 'cors',
      });
      const data = await response.json();
      if (data.success) {
        alert('회원가입 성공');
        handleLoginBack();
      } else {
        alert('회원가입 실패');
      }
    };

  return (
    <Container>
      <Body dir="column">
        <Title htmlfor="email">이메일</Title>
        <div>
          <TextBox placeholder="email" onChange={(e) => setEmail(e.target.value)} />
          <Button value="코드 발송" onClick={handleEmailVerification} />
        </div>
        <Title htmlFor="verificationCode">인증코드</Title>
        <TextBox placeholder="verificationCode"
          id="verificationCode"
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        <Title htmlfor="password">패스워드</Title>
        <TextBox type="password" placeholder="password" onChange={setPassword} />
        <Title htmlfor="passwordCheck">패스워드 확인</Title>
        <TextBox type="password" placeholder="passwordCheck" onChange={(e)=>setPasswordCheck(e.target.value)}/>
        <Button value="완료" onClick={handleSubmit}/>
      </Body>
    </Container>
  );
};

export default RegisterUsers;
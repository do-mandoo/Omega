import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SignupWrapper = styled.div`
  /* display: flex; */
  margin: 10px;
  background-color: #aaa;
  .signupForm {
    display: flex;
    flex-flow: column nowrap;
    background-color: tomato;
  }
  .signupContent {
    width: 500px;
    margin-bottom: 10px;
    line-height: 30px;
    font-size: 16px;
    background-color: #eee;
  }
`;

const Signup = ({
  idValue,
  setIdValue,
  pwValue,
  setPwValue,
  rePwValue,
  setRePwValue,
  nickName,
  setNickName,
  SignUpHandleSubmit,
}) => {
  // const onSubmit = e => {
  //   const newLog = {
  //     name: e.target.value,
  //     id: e.target,
  //     pw: e,
  //     repw: e,
  //   };
  //   e.preventDefault();
  //   const formData = new FormData();
  //   const signUp = {};
  //   for (const pair of formData) {
  //     signUp[pair[0]] = pair[1];
  //   }
  //   const res = api.post('/board', signUp);
  // };
  return (
    <>
      <SignupWrapper>
        <h2>회원가입</h2>
        <form className="signupForm" onSubmit={SignUpHandleSubmit}>
          <input
            className="signupContent signupName"
            id="name"
            name="name"
            type="text"
            value={nickName}
            onChange={e => setNickName(e.target.value)}
            placeholder="이름을 입력하세요."
          />
          <input
            className="signupContent signupID"
            id="id"
            name="id"
            value={idValue}
            onChange={e => setIdValue(e.target.value)}
            type="text"
            placeholder="아이디를 입력하세요."
          />
          <input
            className="signupContent signupPW"
            id="pw"
            name="pw"
            type="password"
            value={pwValue}
            onChange={e => setPwValue(e.target.value)}
            placeholder="비밀번호를 입력하세요."
          />
          <input
            className="signupContent signupRePW"
            id="repw"
            type="password"
            value={rePwValue}
            onChange={e => setRePwValue(e.target.value)}
            placeholder="비밀번호를 재입력하세요."
          />
          <input className="signupBtn" type="submit" value="회원가입" />
        </form>
      </SignupWrapper>
      <div className="btnWrap">
        <Link to="/">
          <input
            className="signupBtn cancleBtn"
            type="button"
            value="취소하기"
          />
        </Link>
      </div>
    </>
  );
};

export default Signup;

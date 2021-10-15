import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ posts }) => {
  console.log(posts, '로그인에서의 불러온 posts');
  const [login, setLogin] = useState('');
  const [pw, setPw] = useState('');
  const post = posts.find(post => post.nickName === login && post.pw === pw);
  console.log(post, 'asdf');

  const onClickL = () => {
    if (post) {
      console.log(123);
      window.location.href = '/';
      localStorage.setItem(
        'OmegaLogin',
        // JSON.stringify()메서드는 js값이나 객체를 JSON문자열로 변환한다.
        JSON.stringify({
          id: post.id,
          name: post.nickName,
        }),
      );
    } else {
      console.log('ㄴㄴ');
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          className="idText"
          placeholder="아이디를 입력하세요."
          value={login}
          onChange={e => setLogin(e.target.value)}
        />
        <input
          type="password"
          className="pwText"
          placeholder="비밀번호를 입력하세요"
          value={pw}
          onChange={e => setPw(e.target.value)}
        />

        <input type="button" value="로그인" onClick={onClickL} />
      </form>
      <Link to="/signup">
        <input type="button" value="회원가입" />
      </Link>
    </div>
  );
};

export default Login;

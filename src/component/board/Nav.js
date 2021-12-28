import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import api from '../../api/posts';
import WeatherApp from '../weather/WeatherApp';

const NavWrap = styled.div`
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: center;
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 5px 10px;
  }
  ul {
    display: flex;
  }
  li {
    font-weight: bold;
  }
  .aTag {
    text-decoration: none;
    color: #000;
    :hover {
      text-decoration: underline;
    }
  }
  .goLogout {
    cursor: pointer;
  }
  .Nav {
    display: flex;
    width: 900px;
    justify-content: center;
    /* border: 4px dashed red; */
    position: relative;
    margin: 10px auto;
  }
  .mainCategory {
    /* background-color: #eeee40; */

    line-height: 2.5;
    a {
      font-size: 25px;
    }
  }
  .searchForm {
    /* background-color: tomato; */
    /* display: flex; */
    position: absolute;
    right: 0;
    bottom: 0;
    input {
      margin-left: 10px;
    }
  }
  .toggleWrap {
    display: flex;
    /* background-color: skyblue; */
    position: absolute;
    right: 0;
    top: 0;
    a {
      text-decoration: none;
      padding: 8px;
      &:hover {
        color: red;
        font-weight: 600;
      }
    }
  }
`;

const Nav = ({ search, setSearch }) => {
  // 로컬스토리지에 로그인정보를 json형식으로 받아서 저장.
  // getLogin변수로 화면상의 로그인/로그아웃,회원가입 과 Post페이지의 toggle역할을 하게 됨.
  const getLogin = JSON.parse(localStorage.getItem('OmegaLogin'));

  console.log(getLogin, '23904');

  // 로그아웃이 되면 로컬스토리지에 저장한 로그인정보를 삭제시키고 홈페이지로 돌아간다.
  const Logout = () => {
    localStorage.removeItem('OmegaLogin');
    window.location.href = '/';
  };

  return (
    <NavWrap>
      <WeatherApp />
      <nav className="Nav">
        <ul className="mainCategory">
          <li>
            <Link to="/" className="aTag">
              Home
            </Link>
          </li>
          {/* 로그인이 되었을 때만 포스트 작성할 수 있음. */}
          {getLogin && (
            <li className="newPost">
              <Link to="/posts" className="aTag">
                Post
              </Link>
            </li>
          )}
          <li>
            <Link to="/star" className="aTag">
              Star
            </Link>
          </li>
        </ul>

        <form className="searchForm" onSubmit={e => e.preventDefault()}>
          <label htmlFor="search">Search Posts</label>
          <input
            id="search"
            type="text"
            placeholder="Search Posts"
            autocomplete="off"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </form>

        <div className="toggleWrap">
          {getLogin ? (
            <div className="goLogout" onClick={Logout}>
              로그아웃
            </div>
          ) : (
            <>
              <div className="goLogin">
                <Link to="/login">로그인</Link>
              </div>
              <div className="goSignup">
                <Link to="/signup">회원가입</Link>
              </div>
            </>
          )}
        </div>
      </nav>
    </NavWrap>
  );
};

export default Nav;

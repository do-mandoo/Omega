import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import api from '../../api/posts';

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
    font-size: 20px;
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
`;

const Nav = ({ search, setSearch }) => {
  const getLogin = JSON.parse(localStorage.getItem('OmegaLogin'));

  console.log(getLogin, '23904');

  const Logout = () => {
    localStorage.removeItem('OmegaLogin');
    window.location.href = '/';
  };

  return (
    <NavWrap>
      <nav className="Nav">
        <form className="searchForm" onSubmit={e => e.preventDefault()}>
          <label htmlFor="search">Search Posts</label>
          <input
            id="search"
            type="text"
            placeholder="Search Posts"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </form>
        <ul>
          <li>
            <Link to="/" className="aTag">
              Home
            </Link>
          </li>
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

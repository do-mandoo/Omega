import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
`;

const Nav = ({ search, setSearch }) => {
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
          <li>
            <Link to="/posts" className="aTag">
              Post
            </Link>
          </li>
          {/* <li>
            <Link to="/about">About</Link>
          </li> */}
        </ul>
      </nav>
    </NavWrap>
  );
};

export default Nav;

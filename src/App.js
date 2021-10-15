import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Detail from './component/board/Detail';
import Ediotr from './component/board/Ediotr';
import Home from './component/board/Home';
import NewPost from './component/board/NewPost';
import api from './api/posts';
import { format } from 'date-fns';
import Nav from './component/board/Nav';
import Star from './component/board/Star';
import Signup from './component/board/Signup';
import Login from './component/board/Login';
// import HeaderBar from './component/HeaderBar';
// import MainView from './component/MainView';

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const [postCategory, setPostCategory] = useState('');
  const [editCategory, setEditCategory] = useState('');
  const [viewCount, setViewCount] = useState(1);
  const [starFav, setStarFav] = useState(false);

  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [rePwValue, setRePwValue] = useState('');
  const [nickName, setNickName] = useState('');

  const history = useHistory();

  // 데이터 불러와서 home.js파일에 props로 넘겨줌.
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.get('/board');
        console.log(res, 'res');
        setPosts(res.data);
      } catch (error) {
        console.log(error, 'error');
      }
    };
    fetchPosts();
  }, []);

  // 검색
  useEffect(() => {
    const filteredResults = posts.filter(
      post =>
        post.body.includes(search.toLowerCase()) ||
        post.title.includes(search.toLowerCase()),
      // post.category.includes(search),
    );

    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  // 새 게시글 작성
  const handleSubmit = async (e, id) => {
    console.log('kljsdk-00928949');
    e.preventDefault();
    // const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {
      title: postTitle,
      datetime,
      body: postBody,
      category: postCategory,
      view: viewCount,
      star: starFav,
    };
    try {
      const res = await api.post(`/board/${id}`, newPost);
      const allPosts = [...posts, res.data];
      setPosts(allPosts);
      setPostTitle('');
      setPostBody('');
      setPostCategory('');
      history.push('/');
    } catch (error) {
      console.log(error, 'error');
    }
  };

  // 회원가입
  const SignUpHandleSubmit = async e => {
    console.log('kljsdk-00928949');
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    // const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {
      id,
      nickName: idValue,
      pw: pwValue,
      title: '',
      datetime: '',
      body: '',
      category: '',
      view: 1,
      star: false,
    };
    try {
      const res = await api.post('/board', newPost);
      const allPosts = [...posts, res.data];
      setPosts(allPosts);
      setPostTitle('');
      setPostBody('');
      setPostCategory('');
      history.push('/');
    } catch (error) {
      console.log(error, 'error');
    }
  };

  // 게시글 수정
  const handleEdit = async id => {
    // e.preventDefault();
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatePost = {
      title: editTitle,
      datetime,
      body: editBody,
      category: editCategory,
      view: viewCount,
    };
    try {
      const res = await api.patch(`/board/${id}`, updatePost);
      console.log(res, 'handleEdit의 res');
      setPosts(posts.map(post => (post.id === id ? { ...res.data } : post)));
      setEditTitle('');
      setEditBody('');
      setEditCategory('');
      history.push('/');
    } catch (error) {
      console.log(error, 'error');
    }
  };

  // 게시글 삭제
  const handleDelete = async id => {
    try {
      // const id = posts.filter(post => post.id !== id);
      await api.delete(`/board/${id}`);
      history.push('/');
      history.go();
    } catch (error) {
      console.log(error, 'error');
    }
  };

  // 조회수 증가
  const handleViewCount = async id => {
    const updateView = { view: parseInt(viewCount, 10) + 1 };
    console.log(updateView, '호롤로로');
    try {
      const res = await api.patch(`/board/${id}`, updateView);
      setViewCount(res);
    } catch (error) {
      console.log(error, 'viewCount에러');
    }
  };

  // 즐겨찾기(찜하기) vanilla js부분으로 동작하게 함. react스럽게 하기.
  const handleStar = async (e, id) => {
    if (!e.target.classList.contains('starin')) {
      try {
        const trueStar = { star: true };
        const res = await api.patch(`/board/${id}`, trueStar);
        setStarFav(res);
        history.push('/');
        history.go(); // refresh
      } catch (error) {
        console.log(error, '즐겨찾기오류');
      }
    }
    if (!e.target.classList.contains('starout')) {
      try {
        const falseStar = { star: false };
        const res = await api.patch(`/board/${id}`, falseStar);
        setStarFav(res);
        history.push('/');
        history.go(); // refresh
      } catch (error) {
        console.log(error, '즐겨찾기오류');
      }
    }
  };

  console.log(posts, 'posts');

  return (
    <>
      <Nav search={search} setSearch={setSearch} />
      <Switch>
        <Route exact path="/">
          <Home posts={searchResults} />
        </Route>
        <Route path="/signup">
          <Signup
            idValue={idValue}
            setIdValue={setIdValue}
            pwValue={pwValue}
            setPwValue={setPwValue}
            rePwValue={rePwValue}
            setRePwValue={setRePwValue}
            nickName={nickName}
            setNickName={setNickName}
            SignUpHandleSubmit={SignUpHandleSubmit}
          />
        </Route>
        <Route path="/login">
          <Login posts={posts} />
        </Route>
        <Route path="/posts">
          <NewPost
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
            postCategory={postCategory}
            setPostCategory={setPostCategory}
          />
        </Route>
        <Route path="/edit/:id">
          <Ediotr
            posts={posts}
            handleEdit={handleEdit}
            editTitle={editTitle}
            setEditTitle={setEditTitle}
            editBody={editBody}
            setEditBody={setEditBody}
            editCategory={editCategory}
            setEditCategory={setEditCategory}
          />
        </Route>
        <Route path="/post/:id">
          <Detail
            handleViewCount={handleViewCount}
            posts={posts}
            handleDelete={handleDelete}
            handleStar={handleStar}
          />
        </Route>
        <Route path="/star">
          <Star posts={posts} />
        </Route>
      </Switch>
    </>
  );
}

export default App;

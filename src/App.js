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

  const history = useHistory();

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

  useEffect(() => {
    const filteredResults = posts.filter(
      post =>
        post.body.includes(search.toLowerCase()) ||
        post.title.includes(search.toLowerCase()),
      // post.category.includes(search),
    );

    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  // useEffect(() => {
  //   const starFilter = posts.filter(post => post.star);
  //   setStar(starFilter);
  // }, [posts]);

  const handleSubmit = async e => {
    console.log('kljsdk-00928949');
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {
      id,
      title: postTitle,
      datetime,
      body: postBody,
      category: postCategory,
      view: viewCount,
      star: starFav,
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

  const handleEdit = async id => {
    // e.preventDefault();
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatePost = {
      title: editTitle,
      datetime,
      body: editBody,
      category: postCategory,
      view: viewCount,
    };
    try {
      const res = await api.patch(`/board/${id}`, updatePost);
      console.log(res, 'handleEdit의 res');
      setPosts(posts.map(post => (post.id === id ? { ...res.data } : post)));
      setEditTitle('');
      setEditBody('');
      history.push('/');
    } catch (error) {
      console.log(error, 'error');
    }
  };

  const handleDelete = async id => {
    try {
      await api.delete(`/board/${id}`);
      const postsList = posts.filter(post => post.id !== id);
      setPosts(postsList);
      history.push('/');
    } catch (error) {
      console.log(error, 'error');
    }
  };

  const handleViewCount = async id => {
    const updateView = { view: viewCount };
    try {
      const res = await api.patch(`board/${id}`, updateView);
      setPosts(posts.map(post => (post.id === id ? { ...res.data } : post)));
      setViewCount(viewCount + 1);
    } catch (error) {}
  };

  const handleStar = async (e, id) => {
    console.log(e, id, 'e랑 id');
    console.log(e.target, 'starin이 있냐없냐');
    if (!e.target.classList.contains('starin')) {
      console.log('e.target의 className에 starin이 없으면!');
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
      console.log('e.target의 className에 starout이 없으면!');
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

  // console.log(handleStar, 'handleSTAR');

  // onClick={e => {
  //   setStar(e.target.value);
  //   handleStar(post.id);
  //   console.log(e.target.checked, 'checkboxtarget');
  // };

  console.log(posts, 'posts');

  return (
    <>
      <Nav search={search} setSearch={setSearch} />
      <Switch>
        <Route exact path="/">
          <Home posts={searchResults} />
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
            posts={posts}
            handleDelete={handleDelete}
            // viewCount={viewCount}
            handleViewCount={handleViewCount}
            // setStar={setStar}
            handleStar={handleStar}
          />
        </Route>
        <Route path="/star">
          <Star
            posts={posts}
            // handleStar={handleStar}
            // handleViewCount={handleViewCount}
          />
        </Route>
      </Switch>
    </>
  );
}

export default App;

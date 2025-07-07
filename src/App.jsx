// App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage/Homepage';
import BoardList from './components/board/BoardList';
import PostList from './components/board/PostList';
import WritePost from './components/board/WritePost';
import Post from './components/board/Post';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import styled from 'styled-components';

const App = () => {
  const [postsByBoard, setPostsByBoard] = useState({
    '자유게시판': [],
    '정보게시판': [],
    '취업·진로게시판': [],
    '홍보게시판': [],
  });

  const handlePostSubmit = (boardName, newPost) => {
    const decoded = decodeURIComponent(boardName);
    setPostsByBoard(prev => ({
      ...prev,
      [decoded]: [newPost, ...(prev[decoded] || [])],
    }));
  };

  return (
    <AppWrapper>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/board" element={<BoardList />} />
          <Route path="/board/:boardName" element={<PostList postsByBoard={postsByBoard} />} />
          <Route
            path="/board/:boardName/write"
            element={<WritePost onPostSubmit={handlePostSubmit} />}
          />
          <Route
            path="/board/:boardName/post/:postId"
            element={<Post postsByBoard={postsByBoard} />}
          />
        </Routes>
      </Main>
      <Navbar />
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.div``;
const Main = styled.main`
  padding-bottom: 64px;
`;

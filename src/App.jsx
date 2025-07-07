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
import EditPost from './components/board/EditPost';

const App = () => {
  const [postsByBoard, setPostsByBoard] = useState({
    '자유게시판': [
      { id: 1, title: '멋쟁이사자처럼 어때?', content: '는 내가 들어왔는데 너무 좋아!!!!!!!!!!!!', user: '홍길동', time: '2025-07-07', likes: 0 },
      { id: 2, title: '학점 올랐어!!!', content: '저번 학기 3.32에서 4.2로 오름!! 잘했지...? 잘했다고 해 줘....... ', user: '익명', time: '2025-07-07', likes: 3 }
    ],
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
          <Route
            path="/board/:boardName/edit/:postId"
            element={
              <EditPost postsByBoard={postsByBoard} setPostsByBoard={setPostsByBoard} />
            }
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

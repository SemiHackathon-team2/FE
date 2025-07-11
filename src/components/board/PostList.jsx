// components/board/PostList.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { fetchBoards } from '../../api';

const PostList = ({ postsByBoard }) => {
  const { boardName } = useParams();
  const navigate = useNavigate();
  const decodedBoard = decodeURIComponent(boardName);
  // const posts = postsByBoard[decodedBoard] || [];

  const [posts, setPosts] = useState([])

  useEffect(() => {
     fetchBoards().then((response) => {
      setPosts(response)
     })
   
  },[])

  console.log(posts)

  return (
    <Wrapper>
      <Header>
        <Back onClick={() => navigate(-1)}>←</Back>
        <Title>{decodedBoard}</Title>
      </Header>

      {posts.map(post => (
        <PostItem
          key={post.postId}
          onClick={() =>
            navigate(`/board/${encodeURIComponent(decodedBoard)}/post/${post.id}`)
          }
        >
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </PostItem>
      ))}

      <WriteButton onClick={() => navigate(`/board/${boardName}/write`)}>✏ 글쓰기</WriteButton>
    </Wrapper>
  );
};

export default PostList;

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const Back = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  margin-right: 12px;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
`;

const PostItem = styled.div`
  padding: 16px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
`;

const WriteButton = styled.button`
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translate(-50%,-100%);
  background-color: orange;
  color: white;
  font-weight: 600;
  font-size: 16px;
  border: none;
  padding: 14px 24px;
  border-radius: 50px;
  cursor: pointer;
`;

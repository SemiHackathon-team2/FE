// components/board/Post.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Post = ({ postsByBoard }) => {
  const { boardName, postId } = useParams();
  const navigate = useNavigate();
  const decodedBoard = decodeURIComponent(boardName);
  const post = (postsByBoard[decodedBoard] || []).find(p => String(p.id) === postId);

  const [likes, setLikes] = useState(post?.likes || 0);
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');

  const handleLike = () => setLikes(likes + 1);
  const handleAddComment = () => {
    if (!input.trim()) return;
    setComments(prev => [...prev, input]);
    setInput('');
  };
  const handleDelete = () => {
  if (window.confirm('정말 삭제하시겠습니까?')) {
    navigate(-1);
  }
};

    const handleEdit = () => {
  navigate(`/board/${encodeURIComponent(boardName)}/edit/${post.id}`);
};

  if (!post) return <div>게시글을 찾을 수 없습니다.</div>;

  return (
    <Wrapper>
        <Back onClick={() => navigate(-1)}>← 목록으로</Back>
        <Title>{post.title}</Title>
        <Meta>
        {post.user} · {post.time}
        <Button>
            <Edit onClick={handleEdit}>수정</Edit>
            <Delete onClick={handleDelete}>삭제</Delete>
        </Button>
      </Meta>
      <Content>{post.content}</Content>

      <LikeBtn onClick={handleLike}>👍 좋아요 {likes}</LikeBtn>
      <CommentSection>
        <h3>댓글</h3>
        <CommentInput>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="댓글을 입력하세요"
          />
          <button onClick={handleAddComment}>등록</button>
        </CommentInput>
        <ul>
          {comments.map((comment, i) => (
            <div>
            <li key={i}>💬 {comment}</li>
            <Button>
              <Edit>수정</Edit>
              <Delete>삭제</Delete>
            </Button>
            </div>
          ))}
        </ul>
      </CommentSection>
    </Wrapper>
  );
};

export default Post;

const Wrapper = styled.div`
  max-width: 800px;
  margin: 80px auto;
  padding: 0 20px;
`;

const Back = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  margin-bottom: 16px;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Meta = styled.div`
  font-size: 14px;
  color: #999;
  margin-bottom: 24px;
`;

const Content = styled.div`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 24px;
`;

const LikeBtn = styled.button`
  background: orange;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 32px;
`;

const CommentSection = styled.div`
  border-top: 1px solid #eee;
  padding-top: 24px;
`;

const CommentInput = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;

  input {
    flex: 1;
    padding: 8px;
    font-size: 14px;
  }

  button {
    padding: 8px 12px;
    font-size: 14px;
    background: #222;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
`;

const Button = styled.div`
  display: flex;
  gap: 8px;
  margin-right: auto;
  justify-content: flex-end;
`;

const Delete = styled.button`
  background: none;
  border: 1px solid #ddd;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
`;

const Edit = styled.button`
  background: none;
  border: 1px solid #ddd;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
`;
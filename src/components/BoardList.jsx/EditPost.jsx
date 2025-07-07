// components/board/EditPost.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

console.log('postsByBoard:', postsByBoard);
console.log('boardName:', boardName, 'decodedBoard:', decodedBoard, 'postId:', postId);
console.log('found post:', post);

const EditPost = ({ postsByBoard, setPostsByBoard }) => {
  const { boardName, postId } = useParams();
  const navigate = useNavigate();
  const decodedBoard = decodeURIComponent(boardName);

  const post = (postsByBoard[decodedBoard] || []).find(p => String(p.id) === postId);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // 기존 내용 초기화
  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPost = {
      ...post,
      title,
      content,
      time: new Date().toLocaleString(),
    };

    // 게시글 갱신
    setPostsByBoard(prev => {
      const updated = { ...prev };
      updated[decodedBoard] = updated[decodedBoard].map(p =>
        String(p.id) === postId ? updatedPost : p
      );
      return updated;
    });

    navigate(`/board/${encodeURIComponent(boardName)}/${postId}`); // 게시글 상세로 이동
  };

  if (!post) return <div>게시글을 찾을 수 없습니다.</div>;

  return (
    <Wrapper>
      <h2>게시글 수정</h2>
      <Form onSubmit={handleSubmit}>
        <label>
          제목
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          내용
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            required
          />
        </label>
        <button type="submit">수정 완료</button>
      </Form>
    </Wrapper>
  );
};

export default EditPost;

const Wrapper = styled.div`
  max-width: 800px;
  margin: 80px auto;
  padding: 0 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  label {
    font-size: 14px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  input,
  textarea {
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  textarea {
    height: 200px;
    resize: vertical;
  }

  button {
    align-self: flex-end;
    padding: 10px 16px;
    font-size: 14px;
    background-color: #1e90ff;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
`;

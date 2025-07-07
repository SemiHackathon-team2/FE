import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const WritePost = ({ onPostSubmit }) => {
  const { boardName } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    if (!title || !content) {
      alert('제목과 내용을 입력해주세요.');
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      content,
      user: isAnonymous ? '익명' : '작성자',
      time: new Date().toLocaleTimeString(),
      likes: 0,
      comments: 0,
    };

    onPostSubmit(boardName, newPost); // 상위 컴포넌트에서 게시판별로 저장
    navigate(`/board/${boardName}`);
  };

  return (
    <Container>
      <h2>{decodeURIComponent(boardName)} 글쓰기</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="제목을 입력하세요"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <Label>
          <input
            type="checkbox"
            checked={isAnonymous}
            onChange={() => setIsAnonymous(!isAnonymous)}
          />
          익명으로 작성
        </Label>
        <Submit type="submit">등록</Submit>
      </Form>
    </Container>
  );
};

export default WritePost;

// styled-components
const Container = styled.div`
  max-width: 700px;
  margin: 40px auto;
  padding: 0 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  min-height: 200px;
`;

const Label = styled.label`
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Submit = styled.button`
  background-color: #222;
  color: white;
  border: none;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
`;

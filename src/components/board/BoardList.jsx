import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const boards = ['자유게시판', '정보게시판', '취업·진로게시판', '홍보게시판'];

const BoardList = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title>게시판 목록</Title>
      <CardList>
        {boards.map((board, idx) => (
          <BoardCard key={idx} onClick={() => navigate(`/board/${encodeURIComponent(board)}`)}>
            {board}
          </BoardCard>
        ))}
      </CardList>
    </Wrapper>
  );
};

export default BoardList;

// 스타일
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 16px;
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 32px;
`;

const CardList = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BoardCard = styled.div`
  padding: 20px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: #f9f9f9;
  }
`;

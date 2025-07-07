// components/homepage/HomePage.jsx
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PageURL from './PageURL';
const boards = [
  '자유게시판',
  '정보게시판',
  '취업·진로게시판',
  '홍보게시판',
];

const HomePage = () => {
  const navigate = useNavigate();

  return (

    <Wrapper>
    <PageURL />
      <SectionTitle>게시판 전체보기</SectionTitle>
      <BoardList>
        {boards.map((board, idx) => (
          <BoardRow
            key={idx}
            onClick={() => navigate(`/board/${encodeURIComponent(board)}`)}
          >
            {board}
          </BoardRow>
        ))}
      </BoardList>
    </Wrapper>
  );
};

export default HomePage;

// styled-components
const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const BoardList = styled.div`
  background: #f9f9f9;
  padding: 16px;
  border-radius: 16px;
`;

const BoardRow = styled.div`
  padding: 14px 8px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 1px solid #eee;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #f0f0f0;
  }
`;

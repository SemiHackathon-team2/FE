// components/navbar/Navbar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <NavItem onClick={() => navigate('/')}>홈</NavItem>
      <NavItem onClick={() => navigate('/board')}>게시판</NavItem>
    </Wrapper>
  );
};

export default Navbar;

// styled-components
const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border-top: 1px solid #ddd;
  padding: 12px 16px;
  display: flex;
  justify-content: space-around;
  z-index: 1000;
`;

const NavItem = styled.div`
  font-size: 14px;
  color: #333;
  cursor: pointer;
  padding: 6px 8px;

  &:hover {
    color: #007bff;
  }
`;

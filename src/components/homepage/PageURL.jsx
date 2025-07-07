// PageURL.jsx
import React from 'react';

const quickLinks = [
  { label: '학교 홈', icon: 'data:image/png;base64,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', url: 'https://www.skuniv.ac.kr/' },
  { label: '포탈', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpOrL10_gcwlarIiS1jCrnleno52EkZ8SceA&s', url: 'https://sportal.skuniv.ac.kr/' },
  { label: '학사 공지', icon: 'https://png.pngtree.com/png-vector/20190508/ourmid/pngtree-bell-vector-icon-png-image_1027888.jpg', url: 'https://www.skuniv.ac.kr/notice' },
  { label: '학사 일정', icon: 'https://cdn-icons-png.flaticon.com/512/6121/6121440.png', url: 'https://www.skuniv.ac.kr/academic_calendar' },
  { label: '도서관', icon: 'https://cdn-icons-png.flaticon.com/512/207/207114.png', url: 'https://library.skuniv.ac.kr/#/' },
];

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  margin: '15px 0'
};

const buttonStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '80px',
  margin: '10px',
  textDecoration: 'none',
  color: 'black',
};

const iconStyle = {
  width: '40px',
  height: '40px',
  marginBottom: '5px',
};

const PageURL = () => {
  return (
    <div style={containerStyle}>
      {quickLinks.map((link, idx) => (
        <a
          key={idx}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          <img src={link.icon} alt={link.label} style={iconStyle} />
          <div>{link.label}</div>
        </a>
      ))}
    </div>
  );
};

export default PageURL;

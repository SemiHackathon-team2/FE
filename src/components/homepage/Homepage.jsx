import styled from "styled-components";
import { useState } from "react";
//import Navbar from "../navbar/Navbar";
//import BoardList from "../board/BoardList";


export default function Homepage(){
    const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("검색어:", query);
  };

    return(
        <div>        
            <Header> 
                <Left>
                    <Logo src={"https://nowjin.tplinkdns.com/images/user/default-user-image150.png"} alt="EveryTime Logo"/>
                    <Title>LionTime</Title>
                </Left>
                <Right>
                    <Search
                        type="text"
                        placeholder="검색어를 입력하세요"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        />
                    <SearchButton onClick={handleSearch}>검색</SearchButton>
                </Right>
            </Header>
            {/*<NavBar/>*/}
            {/*<BoardList/>*/}

        </div>



    );
}

const Title = styled.h1`
    //color: #ff8000;
`;

const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;  
    padding: 16px 24px;
    max-width: 100%;
    box-sizing: border-box; 
    //background-color: #f8f8f8;
`;

const Logo = styled.img`
    width: 80px;
    height: 80px;
`;

const Search = styled.input`
    border-radius: 4px;
    font-size: 14px;
    width: 200px;
    padding: 8px 12px;
    border: 1px solid #ccc;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const Right = styled.div`
    display: flex;  
    align-items: center;
`;

const SearchButton = styled.button`
  margin-left: 8px;
  padding: 8px 16px;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: skyblue;
  }
`;
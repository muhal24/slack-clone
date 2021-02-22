import { Avatar } from '@material-ui/core';
import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import styled from "styled-components";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
    <HeaderContainer>
     <HeaderLeft>
     <HeaderAvatar
     src="https://avatars.githubusercontent.com/u/76661007?s=460&u=1f4e2928bc46a8ab1e76c5709461dfa02e67336e&v=4"
     />
     <AccessTimeIcon/>
     </HeaderLeft>
   
   <HeaderSearch>
    <SearchIcon/>
    <input placeholder="Search" />
   </HeaderSearch>

  <HeaderRight>
  <HelpOutlineIcon/>
  </HeaderRight>

    </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.div`
display: flex;
position: fixed;
width: 100%;
align-items: center;
justify-content: space-between;
padding: 10px 0;
background-color: var(--slack-color);
color:white;
`;

const HeaderLeft = styled.div`
flex: 0.3;
display: flex;
align-items: center;
margin-left:20px;

> .MuiSvgIcon-root {
    margin-left:auto;
    margin-right:30px;
}
`;

const HeaderAvatar = styled(Avatar)`
cursor: pointer;

:hover {
    opacity:0.8;
}
`;

const HeaderSearch = styled.div`
flex: 0.4;
opacity:1;
border-radius:8px;
background-color: #421f44;
text-align:center;
display: flex;
padding: 0 50px;
color:gray;
border: 1px gray solid;

>input {
    background-color: transparent;
    border:none;
    text-align: center;
    min-width:30vw;
    outline:0;
    color:white;
}
`;

const HeaderRight = styled.div`
flex: 0.3;
display: flex;
align-items: flex-end;
margin-left: 10rem;

> .MuiSvg-root{
margin-left: auto;
margin-right: 20px;
}
`;
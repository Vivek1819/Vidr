import React from "react";
import styled from "styled-components";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

const Container=styled.div`
position:sticky;
top:0;
background-color:white;
height:56px;
`

const Wrapper=styled.div`
display:flex;
align-items:center;
height:100%;
padding:0px 20px;
`
const Search=styled.div``

const Input=styled.input``

const Button=styled.button`
padding:5px 15px;
background-color:transparent;
border:1px solid #3ea6ff;
color:#3ea6ff;
border-radius:3px;
font-weight:500;
cursor:pointer;
display:flex;
align-items:center;
gap:5px;
`

export default function Navbar(){
    return(
        <Container>
            <Wrapper>
                <Search>
                    <Input placeholder="Search" />
                    <SearchIcon/>
                </Search>
                <Button> <AccountCircleIcon/>SIGN IN</Button>
            </Wrapper>
        </Container>
    )
}
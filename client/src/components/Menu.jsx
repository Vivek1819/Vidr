import React from "react";
import styled from "styled-components";
import YouTube from "../img/logo.png"
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import ArticleIcon from '@mui/icons-material/Article';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import SignIn from "../pages/SignIn";
import { useSelector } from "react-redux";


const Container= styled.div`
flex:1;
background-color:${({theme})=>theme.bgLighter};
height:100vh;
color:${({theme})=>theme.text};
font-size:15px;
position:sticky;
top:0;
`

const Wrapper= styled.div`
padding:18px 26px;
`

const Logo=styled.div`
display:flex;
align-items:center;
gap:5px; 
margin-botton:45px;
padding:15px
`

const Img=styled.img`
height:25px;
`

const Item=styled.div`
display:flex;
align-items:center;
gap:20px;
cursor:pointer;
padding:5px 10px;

&:hover{
background-color:${({theme})=>theme.soft};
}
`

const Hr=styled.div`
margin:15px 0px;
border: 0.5px solid ${({theme})=>theme.soft};
`

const Login=styled.div`
padding:5px 0px;
font-size:16px;
`
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
const Title=styled.h2`
font-size:15px;
font-weight:500;
color:#aaaaaa;
margin-bottom:20px;
`

export default function Menu({darkMode,setDarkMode}){

    const {currentUser}=useSelector(state=>state.user)
    return(
        <Container>
            <Wrapper>
            <Link to="/" style={{textDecoration:'none',color:'inherit'}}>
                <Logo>
                    <Img src={YouTube}/>
                    YouTube
                </Logo>
                <Item>
                    <HomeIcon />Home
                </Item>
                <Link to="trends" style={{textDecoration:"none",color:'inherit'}}>
                <Item>
                    <ExploreIcon />Explore
                </Item>
                </Link>
                <Link to="subscriptions" style={{textDecoration:"none",color:'inherit'}}>
                <Item>
                    <SubscriptionsIcon />Subscriptions
                </Item>
                </Link>
                <Hr />
                <Item>
                    <VideoLibraryIcon />Library
                </Item>
                <Item>
                    <HistoryIcon />History
                </Item>    
                <Hr/>
                {!currentUser && <><Login>
                    Sign in to like videos,comments and subscribe.
                    <Link to="signin" style={{textDecoration:"none"}}>
                    <br/ >
                    <Button> <AccountCircleIcon/>SIGN IN</Button>
                    </Link>
                </Login>
                <Hr/></>}
                <Title>Best of YouTube</Title>
                <Item>
                    <LibraryMusicIcon />Music
                </Item>
                <Item>
                    <SportsBasketballIcon/>Sports
                </Item>
                <Item>
                    <SportsEsportsIcon/>Gaming
                </Item>
                <Item>
                    <MovieCreationIcon/>Movie
                </Item>
                <Item>
                    <ArticleIcon/>News
                </Item>
                <Item>
                    <LiveTvIcon/>Live
                </Item>
                <Hr/>
                <Item>
                    <SettingsIcon/>Settings
                </Item>
                <Item>
                    <FlagIcon/>Report
                </Item>
                <Item>
                    <HelpOutlineIcon/>Help
                </Item>
                <Item onClick={()=>setDarkMode(prevDarkMode => !prevDarkMode)}>
                    <SettingsBrightnessIcon/>{darkMode ? "Light" : "Dark"} Mode
                </Item>
                </Link>
            </Wrapper>

        </Container>
    )
}
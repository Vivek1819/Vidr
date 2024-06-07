import React from "react";
import styled from "styled-components";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ShareIcon from '@mui/icons-material/Share';
import AddTaskIcon from '@mui/icons-material/AddTask';
import GrandCanyonImage from "../img/grand_canyon.jpg"
import Comments from "../components/Comments";
import Card from "../components/Card";


const Container=styled.div`
display:flex;
gap:24px;
`

const Content=styled.div`
flex:5;
`

const VideoWrapper=styled.div`
flex:5;
`
const Title=styled.h1`
font-size:18px;
font-weight:400;
`

const Details=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`

const Info=styled.span`
color:${({theme})=>theme.textSoft};

`

const Buttons=styled.div`
display:flex;
gap:20px;
color:${({theme})=>theme.textSoft};
`

const Button=styled.div`
display:flex;
align-items:center;
gap:5px;
cursor:pointer;
`

const Hr=styled.hr`
margin:15px 0px;;
border:0.5px solid ${({theme})=>theme.soft};
`

const Recommendation=styled.div`
flex:2;
`
const Channel=styled.div`

`

const ChannelInfo=styled.div`
display:flex;
gap:20px;
`

const Image=styled.img`
width:50px;
height:50px;
border-radius:50%;
`

const ChannelDetail=styled.div`
display:flex;
flex-direction:column;
color:${({theme})=>theme.text};
`
const ChannelName=styled.span`
font-weight:500;
`

const ChannelCounter=styled.span`
margin-top:5px;
margin-bottom:20px;
color:${({theme})=>theme.textSoft};
font-size:12px;
`

const Description=styled.p`
font-size:14px;
`

const Subscribe=styled.button`
background-color:#cc1a00;
font-weight:500;
color:white;
border:none;
border-radius:5px;
height:25px;
padding:5px;
cursor:pointer;
`

export default function Video(){
    return(
        <Container>
            <Content>
                <VideoWrapper>
                <iframe 
                    width="100%" 
                    height="720"
                    src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
                    allowFullScreen>
                </iframe>

                </VideoWrapper>
                <Title>Test Video</Title>
                <Details>
                    <Info>7,948,154 Views • Jun 22,2022</Info>
                    <Buttons>
                        <Button> <ThumbUpIcon/> Like</Button>
                        <Button> <ThumbDownAltIcon /> Dislike</Button>
                        <Button> <ShareIcon /> Share</Button>
                        <Button> <AddTaskIcon />Save</Button>
                    </Buttons>
                </Details>
                <Hr />
                <Channel>
                    <ChannelInfo>
                        <Image src={GrandCanyonImage} />
                        <ChannelDetail>
                            <ChannelName>YouDev</ChannelName>
                            <ChannelCounter>200k Subscribers</ChannelCounter>
                            <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </Description>
                        </ChannelDetail>
                        <Subscribe>Subscribe</Subscribe>
                    </ChannelInfo>
                </Channel>
                <Hr />
                <Comments/>
            </Content>
            <Recommendation>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
            </Recommendation>
        </Container>
    )
}
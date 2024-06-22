import React, { useEffect } from "react";
import styled from "styled-components";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ShareIcon from '@mui/icons-material/Share';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Comments from "../components/Comments";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchStart,fetchSuccess } from "../redux/videoSlice";
import axios from 'axios';


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

    const {currentUser}=useSelector((state)=>state.user)
    const {currentVideo}=useSelector((state)=>state.video)
    const dispatch=useDispatch()

    const path=useLocation().pathname.split("/")[2]
    
    
    const [channel,setChannel]=React.useState({})

    useEffect(()=>{
        dispatch(fetchStart())
        const fetchData =async() =>{
            try{
                const videoRes=await axios.get("http://localhost:3000/api/videos/find/"+path)
                const channelRes= await axios.get("http://localhost:3000/api/users/find/"+videoRes.data.userId)
                setChannel(channelRes.data)
                dispatch(fetchSuccess(videoRes.data))
                console.log(currentVideo)
            }
        catch(err){
            console.log(err)
        }
    }
    fetchData()
    },[path,dispatch])
    
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
                <Title>{currentVideo.title}</Title>
                <Details>
                    <Info>{currentVideo.views} Views • {format(currentVideo.createdAt)}</Info>
                    <Buttons>
                        <Button> <ThumbUpIcon/> {currentVideo.likes }</Button>
                        <Button> <ThumbDownAltIcon /> {currentVideo.dislikes }</Button>
                        <Button> <ShareIcon /> Share</Button>
                        <Button> <AddTaskIcon />Save</Button>
                    </Buttons>
                </Details>
                <Hr />
                <Channel>
                    <ChannelInfo>
                        <Image src={channel.img} />
                        <ChannelDetail>
                            <ChannelName>{channel.name}</ChannelName>
                            <ChannelCounter>{channel.subscribers} Subscribers</ChannelCounter>
                            <Description>
                            {currentVideo.description}
                            </Description>
                        </ChannelDetail>
                        <Subscribe>Subscribe</Subscribe>
                    </ChannelInfo>
                </Channel>
                <Hr />
                <Comments/>
            </Content>
            
            
            <Recommendation>
            <Card type="sm" key={currentVideo._id} video={currentVideo}/>
            <Card type="sm" key={currentVideo._id} video={currentVideo}/>
            <Card type="sm" key={currentVideo._id} video={currentVideo}/>
            <Card type="sm" key={currentVideo._id} video={currentVideo}/>
            <Card type="sm" key={currentVideo._id} video={currentVideo}/>
            <Card type="sm" key={currentVideo._id} video={currentVideo}/>
            <Card type="sm" key={currentVideo._id} video={currentVideo}/>
            <Card type="sm" key={currentVideo._id} video={currentVideo}/>
            <Card type="sm" key={currentVideo._id} video={currentVideo}/>
            <Card type="sm" key={currentVideo._id} video={currentVideo}/>
            <Card type="sm" key={currentVideo._id} video={currentVideo}/>
            <Card type="sm" key={currentVideo._id} video={currentVideo}/>
            <Card type="sm" key={currentVideo._id} video={currentVideo}/>
            <Card type="sm" key={currentVideo._id} video={currentVideo}/>
            </Recommendation>

            
    
        </Container>
    )
}
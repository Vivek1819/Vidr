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
import { fetchStart,fetchSuccess, like,dislike,fetchFailure } from "../redux/videoSlice";
import axios from 'axios';
import { OAuthCredential } from "firebase/auth";
import { format } from "timeago.js";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { subscription } from "../redux/userSlice";
import Reccomendation from "../components/Reccomendation";

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
color:${({theme})=>theme.text};
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

const Channel=styled.div`

`

const ChannelInfo=styled.div`
display:flex;
gap:20px;
justify-content: space-between;
align-items: center;
`

const Image=styled.img`
width:50px;
height:50px;
border-radius:50%;
padding:10px;
`

const ChannelDetail=styled.div`
display:flex;
padding:10px;
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
height:35px;
width:80px;
padding:5px;
cursor:pointer;
`

const Divider=styled.div`
display:flex;
`

const VideoFrame=styled.video`
max-height:720px;
width:100%,
object-fit:cover;
`

export default function Video(){

    const {currentUser}=useSelector((state)=>state.user)
    const {currentVideo}=useSelector((state)=>state.video)
    const dispatch=useDispatch()

    const path=useLocation().pathname.split("/")[2]
    console.log(currentVideo)

     
    const [channel,setChannel]=React.useState({})

    useEffect(()=>{
        const fetchData =async() =>{
            try{
                const videoRes=await axios.get("http://localhost:3000/api/videos/find/"+path)
                //const channelRes= await axios.get("http://localhost:3000/api/users/find/"+videoRes.data.userId)
               // setChannel(channelRes.data)
               dispatch(fetchSuccess(videoRes.data))
            }
        catch(err){
            dispatch(fetchFailure())
        }
    }
    fetchData()
    },[path,dispatch])

    const handleLike= async()=>{
        await axios.put(`http://localhost:3000/api/users/like/${currentVideo._id}`);
        dispatch(like(currentUser._id))
    }
    
    const handleDislike= async()=>{
        await axios.put(`http://localhost:3000/api/users/dislike/${channel._id}`);
        dispatch(dislike(currentUser._id))
    }

    const handleSub= async()=>{
        currentUser.subscribedUsers?.includes(channel._id)?
        await axios.put(`http://localhost:3000/api/users/unsub/${currentVideo._id}`) :
        await axios.put(`http://localhost:3000/api/users/sub/${currentVideo._id}`);
        dispatch(subscription(channel._id))
    }

    return(
        
        <Container>
              <Content>
                <VideoWrapper>
                <VideoFrame src={currentVideo.videoURL} />
                </VideoWrapper>

                
                 <Title>{currentVideo.title}</Title>
                <Details>
                    <Info>{currentVideo.views} Views • {format(currentVideo.createdAt)}</Info>
                    <Buttons>
                        <Button onClick={handleLike}>
                            {currentVideo.likes?.includes(currentUser._id)? (<ThumbUpIcon/>) : <ThumbUpOffAltIcon/> }{currentVideo.likes }
                        </Button>
                        <Button onClick={handleDislike}> 
                        {currentVideo.dislikes?.includes(currentUser._id)?<ThumbDownAltIcon /> : <ThumbDownOffAltIcon/> } {currentVideo.dislikes}
                        </Button>
                        <Button> <ShareIcon /> Share</Button>
                        <Button> <AddTaskIcon />Save</Button>
                    </Buttons>
                </Details>
                       
                <Hr />
                <Channel>
                    <ChannelInfo>
                        <Divider>
                        <Image src={channel.img} />
                        <ChannelDetail>
                            <ChannelName>{channel.name}</ChannelName>
                            <ChannelCounter>{channel.subscribers} subscribers</ChannelCounter>
                            <Description>
                            {currentVideo.description}
                            </Description>
                        </ChannelDetail>
                        </Divider>
                        <Subscribe onClick={handleSub}>{currentUser.subscribedUsers?.includes(channel._id)? "Subscribed" : "Subscribe"}</Subscribe>
                    </ChannelInfo>
                </Channel>
                <Hr />
                <Comments videoId={currentVideo._id}/>
                
            </Content>

            <Reccomendation tags={currentVideo.tags}/>
            
        </Container>
        
    )
}
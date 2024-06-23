import React, { useEffect,useState } from "react"
import styled from "styled-components"
import axios from 'axios';
import grandCanyonImage from '../img/grand_canyon.jpg';

const Container=styled.div`
display:flex;
gap:10px;
margin:30px 0px;
`

const Avatar=styled.img`
width:50px;
height:50px;
border-radius:50%;
`

const Details=styled.div`
display:flex;
flex-direction:column;
gap:10px;
`

const Name=styled.span`
font-size:13px;
font-weight:600;
color:${({theme})=>theme.text};
margin-left:5px;

`
const Date=styled.span`
font-size:12px;
font-weight:400;
color:${({theme})=>theme.textSoft};
`
const Text=styled.span`
font-size:14px;
color:${({theme})=>theme.text};`

export default function Comment(comment){

    const [channel,setChannel]=useState([]);

    useEffect(()=>{
        const fetchComment=async()=>{
                const res=await axios.get(`http://localhost:3000/api/users/find/${comment.userId}`)
                setChannel(res.data) 
        }
        fetchComment()
    },[comment.userId])


    return(
        <Container>
            <Avatar src={channel.img}/>
            <Details>
                <Name>John Doe</Name><Date>3 days ago</Date>
                <Text>
                    {comment.desc}
                </Text>
            </Details>
        </Container>
    )
}
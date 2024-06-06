import React from "react";
import styled from "styled-components";

const Container=styled.div`
color:${({theme})=>theme.text};
width:360px;
margin-bottom:45px;
cursor:pointer;
`

const Image=styled.div`
width:100%;
height:202px;
background-color:#999;
`

const Details=styled.div`
display:flex;
margin-top:16px;
gap:12px;
`
const ChannelImage=styled.div`
width:36px;
height:36px;
border-radius:50%;
background-color:#999;
`

const Texts=styled.div`

`

const Title=styled.h1`
font-size:18px;
color:${({theme})=>theme.text};

`

const ChannelName=styled.h2`
font-size:14px;
color:${({theme})=>theme.text};
margin:9px 0px;
`

const Info=styled.div`
font-size:14px;
color:${({theme})=>theme.textSoft};
`

export default function Card(){
    return(
        <Container>
            <Image src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.outsideonline.com%2Fadventure-travel%2Fnational-parks%2Fgrand-canyon-travel-guide%2F&psig=AOvVaw1xuxv4h9TRu7fmfsxKj_MY&ust=1717795078229000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjZg73zx4YDFQAAAAAdAAAAABAT"/>
            <Details>
                <ChannelImage />
                <Texts>
                    <Title>Test Video</Title>
                    <ChannelName>YouDev</ChannelName>
                    <Info>660,908 Views • 1 Day Ago</Info>
                </Texts>
            </Details>
        </Container>
    )
}
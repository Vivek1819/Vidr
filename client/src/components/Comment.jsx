import React from "react"
import styled from "styled-components"
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

export default function Comment(){
    return(
        <Container>
            <Avatar src={grandCanyonImage}/>
            <Details>
                <Name>John Doe</Name><Date>3 days ago</Date>
                <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, praesentium nesciunt recusandae saepe eveniet cupiditate accusantium vero explicabo dolorum repellat dolores, delectus illum facilis doloribus aliquam architecto, quia reiciendis laboriosam?
                </Text>
            </Details>
        </Container>
    )
}
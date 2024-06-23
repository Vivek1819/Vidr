import React from "react";
import styled from "styled-components";
import axios from "axios";
import Card from "./Card";
import { useLocation } from "react-router-dom";

const Container=styled.div`
flex:2;
`

const Reccomendation=({tags})=>{

    const [videos,setVideos]=React.useState([])
    const query=useLocation().search

    React.useEffect(()=>{
        const fetchVideos=async()=>{
            try{
                const res=await axios.get(`http://localhost:3000/api/videos/search/${query}`)
                setVideos(res.data)
            }catch(err){
                console.log(err)
            }   
        }
        fetchVideos()
    },[query])

    return(
        <Container>
            {videos.map(video=>(
                <Card type="sm" key={video._id} video={video} />
            )
            )}
        </Container>
    )
}

export default Reccomendation;
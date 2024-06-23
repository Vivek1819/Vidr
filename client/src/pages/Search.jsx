import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Container=styled.div`
display:flex;
flex-wrap:wrap;
gap:10px;
`

const Search=()=>{
    const [videos,setVideos]=React.useState([])
    const query=useLocation().search

    React.useEffect(()=>{
        const fetchVideos=async()=>{
            try{
                const res=await axios.get(`http://localhost:3000/api/videos/search${query}`)
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
      <Card key={video._id} video={video}/>
    ))}
        </Container>
    )

}

export default Search
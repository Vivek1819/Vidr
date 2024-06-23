import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import { imageListClasses } from "@mui/material";
import { getStorage, ref,uploadBytesResumable,getDownloadURL } from "firebase/storage";
import app from "../firebase";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container=styled.div`
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:#000000a7;
display:flex;
align-items:center;
justify-content:center;
`

const Wrapper=styled.div`
width:600px;
height:600px;
background-color:${({theme})=>theme.bgLighter};
color:${({theme})=>theme.text};
padding:70px;
flex-direction:column;
gap:20px;
position:relative;
display:flex;
border-radius:30px;

`

const Close=styled.div`
position:absolute;
top:50px;
right:50px;
cursor:pointer;
`

const Title=styled.h1`
text-align:center;
`

const Input=styled.input`
border:1px solid ${({theme})=>theme.soft};
color:${({theme})=>theme.text};
border-radius:5px;
padding:10px;
background-color:transparent;
`

const Desc= styled.textarea`
border:1px solid ${({theme})=>theme.soft};
color:${({theme})=>theme.text};
border-radius:5px;
padding:10px;
background-color:transparent;
`

const Button=styled.button`
border-radius:5px;
border:none;
padding:10px 20px;
font-weight:500;
cursor:pointer;
color:${({theme})=>theme.textSoft};
background-color:${({theme})=>theme.soft};
`

const Label=styled.label`
font-size:14px;
`

const Upload= ({setOpen})=>{

    const [img,setImg]=useState(undefined)
    const [imgPer,setImgPerc]=useState(0)
    const [video,setVideo]=useState(undefined)
    const [vidPer,setVidPerc]=useState(0)
    const [tags,setTags]=useState([])
    const [inputs,setInputs]=useState({})

    const navigate=useNavigate()

    const handleTags=(e)=>{
        setTags(e.target.value.split(","))
    }

    const uploadFile = (file, urlType) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);
    
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            urlType === "imgUrl" ? setImgPerc(Math.round(progress)) : setVidPerc(Math.round(progress));
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default:
                break;
            }
          },
          (error) => {},
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setInputs((prev) => {
                return { ...prev, [urlType]: downloadURL };
              });
            });
          }
        );
      };

  useEffect(() => {
    video && uploadFile(video , "videoUrl");
  }, [video]);

  useEffect(() => {
    img && uploadFile(img, "imgUrl");
  }, [img]);

    const handleChange= (e)=>{
        setInputs(prev=>{
            return{...prev,[e.target.name]:e.target.value}
        })
    }

    const handleUpload=async(e)=>{
        e.preventDefault();
        const res= await axios.post("http://localhost:3000/api/videos",{...inputs,tags})
        setOpen(false)
        console.log(res)
        res.status===200 && navigate(`http://localhost:3000/api/video/${res.data._id}`)
    }

    return(
        <Container>
            <Wrapper>
                <Close onClick={()=>setOpen(false)}><CloseIcon /></Close>
                <Title>Upload a New Video</Title>
                <Label>Video: </Label>
                {vidPer>0 ? (
                    "Uploading:"+vidPer+"%"
                ) :
                <Input type='file' accept="video/*" onChange={e=>setVideo(e.target.files[0])}/>
}
                <Input type='text' placeholder="Title" name="title" onChange={handleChange} />
                <Desc placeholder="Description" rows={8} onChange={handleChange}/>
                <Input type='text' placeholder="Tags" onChange={handleTags}/>
                <Label>Thumbnail: </Label>
                {imgPer>0 ? (
                    "Uploading:"+imgPer+"%"
                ) :
                <Input type='file' accept="image/*" onChange={e=>setImg(e.target.files[0])}/>
            }
                <Button onClick={handleUpload}>Upload</Button>
            </Wrapper>
        </Container>
    )
}

export default Upload;
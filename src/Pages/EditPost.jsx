import React,{useEffect, useState} from 'react'
import {PostForm,Container} from '../Components/index'
import appwriteservice from '../services/configservice'
import { useParams,useNavigate } from 'react-router-dom';

const EditPost = () => {
    const [post,setPost]=useState(null);
    const {slug}=useParams()
    const navigate=useNavigate()
    useEffect(() => {
      if(slug)
      {
        appwriteservice.getPostbyID(slug).then((post)=>{
            if(post)
            setPost(post)
        })
      }
      else
      {
        navigate('/')
      }
    
     
    }, [slug,navigate])
    
    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
      ) : null
  
}

export default EditPost
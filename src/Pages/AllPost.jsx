import React,{useEffect,useState} from 'react'
import { PostCard,Container } from '../Components'
import appwriteservise from '../services/configservice'
const AllPost = () => {
    const [posts,setPost]=useState([])
    useEffect(() => {
    
    
      return () => {
        
      }
    }, [])
    appwriteservise.getPosts([]).then((post)=>{
        if(post)
        {
            setPost(post.documents)
        }
      })
    
  return (
    <div className='w-full py-8'><Container>
       <div className='flex flex-wrap'>
       {posts.map((post)=>(
        <div className='p-2  w-1/4'>
            <PostCard key={post.$id} post={post} /></div>
        ))}
       </div>
        </Container></div>
  )
}

export default AllPost;
import React from 'react'
import configservice from '../services/configservice'
import { Link } from 'react-router-dom'

const PostCard = ({$id,title,featureimage}) => {
  const id=$id
  return (
    <Link to={`/post/${id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'></div>
            <img src={configservice.getfilepreview(featureimage)}  alt={title} className=' rounded-xl'/>
            <h2  className=' text-xl font-bold'>{title}</h2>
            </div>
    </Link>
  )
}

export default PostCard
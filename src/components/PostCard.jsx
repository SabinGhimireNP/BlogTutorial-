import React from 'react'
import appwriteService from "../appWrite/config"
import {link} from "react-router-dom"


function PostCard({$id, title, featuredImage}) {
  return (
   <link to={`/post/${$id}`}>
    <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
            <img src={appwriteService.getFilePreview(featuredImage)}   alt={title}  className='rounded-xl'/>

        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
    </div>
   </link>

  )
}1

export default PostCard
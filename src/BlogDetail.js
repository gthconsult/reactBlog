import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from "./useFetch";
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const BlogDetail = () => {
    const history=useNavigate();
    const {id} =useParams();
    const {data: blogs,isPending,error} =useFetch(`http://localhost:8000/posts/${id}`)
    const [isPendingg,setPendingg] =useState(false);
    const handleDelete =(id)=>{
        setPendingg(true)
        fetch(`http://localhost:8000/posts/${id}`,{
            method:"DELETE",

        }       
        ).then(()=>{
            console.log('Blog deleted')
            setPendingg(false)
            history.push('/');
        })
    }
  
    return ( 
        <div className="blog-detail">
            {isPending && <div className='load'>Loading....</div>}
           
            <h1>Blog Detail {id}  </h1>
            {error && <div>{error }</div>}  
            {blogs &&
            <div className="blog-list">
            <h3>{ blogs.title} :</h3>
            <p>{blogs.body}</p>
            {!isPendingg &&<button className='btn-add' onClick={ ()=>handleDelete(id) }>Delete Blog</button>}
            {isPendingg &&<button className='btn-add' onClick={ ()=>handleDelete(id) }>Deleting Blog ...</button>}

            
            </div>
            }
        
                
        </div>
     );
}
 
export default BlogDetail;
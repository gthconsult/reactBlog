import React from 'react';
import  {useState } from 'react'
import {useNavigate} from 'react-router-dom';
const Create = () => {

    const [title,setTitle] =useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('');
    const [isPending,setPending]=useState(false);
    const history=useNavigate();

    const blog={title,body,author};
    const handleSubmit=(e)=>{
        e.preventDefault();
        setPending(true)
        fetch('http://localhost:8000/posts',{
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('blog added')
            setPending(false)
            history.push('/')
            
        })
     
    }
    return ( 
        <div className="create">
            <h1>Add New Blog :</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog title :</label>
                <input type="text" 
                value={title}
                onChange={(e)=>{
                    setTitle(e.target.value)
                }}
                required
                />
                 <label>Blog body :</label>
                <textarea
                 value={body}
                 onChange={(e)=>{
                     setBody(e.target.value)
                 }}
                required
                ></textarea>
                <label>Author :</label>
                <select
                required
                value={author}
                onChange={(e)=>{
                    setAuthor(e.target.value)
                }}
                >
                    <option value="Oussama">Oussama</option>
                    <option value="Souka">Souka</option>
                </select>
                { !isPending && <button className='btn-add'>Add Blog</button>}
                { isPending && <button className='btn-add'>Adding Blog</button>}

            </form>
        </div>
     );
}
 
export default Create;
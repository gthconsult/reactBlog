import React from 'react'
import { Link } from 'react-router-dom';
const BlogList = ({blogs,title}) => {

  
    return ( 
        <div className="allblogs">
             <h1 className="titles2">{title}</h1>
            {
           
             blogs.map(blog=>(
                        
                        <div className="blogs" key={blog.id}>
                          <Link to={`blog/${blog.id}`}>
                             <h1 className="titles">{blog.title}</h1>
                             <p>Blog by <span className='spane'>{blog.author}</span></p>
                             </Link>
                        </div>
                        
                    ))
            }
        </div>
  
     );
}
 
export default BlogList;
import React from 'react';
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Content = () => {
const {data: blogs,isPending,error} =useFetch('http://localhost:8000/posts')



    return ( 
        <div className="content">
    
        <div className="blog-list">
             {error && <div > {error}</div>}   
            {isPending && <div className="load">Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="all blogs "></BlogList>}
        </div>

        </div>
        
     );
}

export default Content;
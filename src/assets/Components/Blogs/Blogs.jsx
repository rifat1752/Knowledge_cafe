/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = ({handleAddToBookmark, addReadMin}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('public.json')
        .then(res =>res.json())
        .then(data=>setBlogs(data));
    },[])
    return (
        <div className="w-1/2 h-auto bg-slate-300 flex flex-col items-center justify-around">
        {
            blogs.map(blog=><Blog
                  key={blog.id}
                    blog={blog} 
                    handleAddToBookmark={handleAddToBookmark}
                    addReadMin={addReadMin}>

                    </Blog>)
        }
        
        </div>
    );
};

export default Blogs;
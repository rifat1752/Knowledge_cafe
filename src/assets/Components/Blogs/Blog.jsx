/* eslint-disable react/prop-types */

import { FaBookmark } from "react-icons/fa";


const Blog = ({blog, handleAddToBookmark,addReadMin}) => {
    const {Id,cover, author,author_img,posted_data,reading_time,title,hastag} = blog;
   
    
    return (
        <div className="w-[80%] h-[450px] my-5 bg-white rounded-lg flex flex-col justify-between">
           <img className="w-full h-[50%] rounded-t-lg" src={cover} alt="" />
            <div className="authors   flex justify-between items-center ">
                <div className="author flex items-center">
                    <img className="w-[40px] h-[40px] rounded-full" src={author_img} alt="" />
                    <div className="name mx-1">
                        <p className="text-lg font-bold">{author}</p>
                        <p className="text-sm text-slate-600">{posted_data}</p>
                    </div>
                </div>
                <p className="text-base font-semibold">{reading_time} mins read  <button onClick={() => handleAddToBookmark(blog)} className="pr-1"><FaBookmark /></button></p>
            </div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-slate-500 ">{hastag}</p>
            <button onClick={() => addReadMin(reading_time,Id)}   className="text-blue-600 underline mb-2 text-left">Mark as read</button>
           
        </div>
        
    );
};

export default Blog;
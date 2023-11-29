/* eslint-disable react/prop-types */

import Bookmark from "./Bookmark";



const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="w-[40%] " >
            <div className="my-3 bg-slate-300">
                <p className="text-lg font-bold text-blue-900 rounded">Spent time on read : {readingTime}  mins</p>
            </div>
            <div className="my-3 bg-slate-300 rounded py-2">
                <h1 className="text-lg font-bold">Bookmarks Blogs: {bookmarks.length}</h1>

                {
                    bookmarks.map(bookmark=> <Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark>)
                }
            </div>
            
        </div>
    );
};

export default Bookmarks;

import { useState } from 'react'
import './App.css'
import Blogs from './assets/Components/Blogs/Blogs'
import Bookmarks from './assets/Components/Bookmarks/Bookmarks'
import Header from './assets/Components/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0);

  const handleAddToBookmark = blog=>{
    const newBookmark= [...bookmarks,blog];
    setBookmarks(newBookmark);
  }
 const addReadMin = (time) =>{
  const newReadingTime = readingTime+time;
  setReadingTime(newReadingTime);




 }

  return (
    <>
     <div>
     <Header></Header>
     </div>
     <hr  className='my-2'/>
     <section className='flex justify-around '>
     <Blogs handleAddToBookmark={handleAddToBookmark} addReadMin={addReadMin}></Blogs>
     <Bookmarks bookmarks={bookmarks}  readingTime={readingTime}></Bookmarks>
     </section>
    </>
  )
}

export default App

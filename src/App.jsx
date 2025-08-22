import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Header from './Component/Header/Header'
function App() {

  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookmark = (blog) => {
     console.log('Bookmark adding soon')
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark= {handleAddToBookmark}></Blogs>
        <Bookmarks></Bookmarks>

      </div>
    </>
  )
}

export default App

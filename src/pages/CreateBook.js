import axios from 'axios'
import React, {useState} from 'react'

function CreateBook() {
  const [title, setTitle] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [ISBN, setISBN] = useState("")
  const [category, setCategory] = useState("")
  const [subcategory, setSubcategory] = useState("")
  const [bookCover, setBookCover] = useState("")
  const [releasedAt, setReleasedAt] = useState("")

  const createBook = (e) =>{
      e.preventDefault();
      const bookData = {};
  
      let token = localStorage.getItem("token")
      bookData.userId = localStorage.getItem("userId")

      bookData.title = title
      bookData.excerpt = excerpt
      bookData.ISBN = ISBN
      bookData.category = category
      bookData.subcategory = subcategory
      bookData.releasedAt = releasedAt
      // bookData.bookCover = bookCover
      console.log(bookData)

      axios.post("http://localhost:3001/books", bookData, { headers: { "x-api-key": token } }).then((responece)=>alert("Book has created successfully"))
      .catch((err)=>alert(err.message))
  }

  return (
    <div id='bigBoxBD'>
      <div id="container">
        <form onSubmit={createBook}>
          <div>Title: <input className='imputCB' type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/></div>
          <div>excerpt: <input className='imputCB' type="text" value={excerpt} onChange={(e)=>setExcerpt(e.target.value)}/></div>
          <div>ISBN: <input className='imputCB' type="number" value={ISBN} onChange={(e)=>setISBN(e.target.value)}/></div>
          <div>category: <input className='imputCB' type="text" value={category} onChange={(e)=>setCategory(e.target.value)}/></div>
          <div>subcategory: <input className='imputCB' type="text" value={subcategory} onChange={(e)=>setSubcategory(e.target.value)}/></div>
          <div>ReleasedAt: <input className='imputCB' type="text" value={releasedAt} onChange={(e)=>setReleasedAt(e.target.value)}/></div>
          <div>Book Cover Image: <input className='imputCB' type="file" value={bookCover} onChange={(e)=>setBookCover(e.target.value)}/></div>
          <button id='btn1' className="btn btn-primary" type='submit' >Create Book</button>
        </form>
      </div>
    </div>
  )
}

export default CreateBook

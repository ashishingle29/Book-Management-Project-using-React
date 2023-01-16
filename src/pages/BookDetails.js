import { useParams } from 'react-router-dom';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../CSS/BookDetails.css"

function BookDetails() {
  const [value, setValue] = useState({})

  const { bookId } = useParams();

  let token = localStorage.getItem("token")
  useEffect(() => {
    axios.get(`http://localhost:3001/books/${bookId}`, { headers: { "x-api-key": token } }).then((responce) => { setValue(responce.data.data) })
      .catch((err) => alert(err.message))
  }, [])

  const deleteFun = () => {
    axios.delete(`http://localhost:3001/books/${bookId}`, { headers: { "x-api-key": token } }).then((responce) => {
      console.log(responce.data)
      alert("Book has deleted")

    }).catch((err) => alert(err.message))
  }



  return (
    <div id='bigBoxBD'>
      <div id="container">
        <img className='imputCB' src={value.bookCover} style={{ width: "10vh", height: "10vh" }} />
        <div>Title: <input className='imputCB' value={value.title} /></div>
        <div>Input : <input className='imputCB' value={value.title} /></div>
        <div>excerpt: <input className='imputCB' value={value.excerpt} /></div>
        <div>ISBN: <input className='imputCB' value={value.ISBN} /></div>
        <div>category: <input className='imputCB' value={value.category} /></div>
        <div>subcategory: <input className='imputCB' value={value.subcategory} /></div>
        <div>reviews: <input className='imputCB' value={value.reviews} /></div>
        <div>isDeleted: <input className='imputCB' value={value.isDeleted} /></div>
        <div>releasedAt: <input className='imputCB' value={value.releasedAt} /></div>
        <div>createdAt: <input className='imputCB' value={value.createdAt} /></div>
        <div>updatedAt: <input className='imputCB' value={value.updatedAt} /></div>
        {/* <div>reviewsData: <p>{value.reviewsData.length}</p></div> */}
        <div>
          <a href={`/updateBook/${bookId}`}><button id='btn1' className="btn btn-primary">Update Book</button></a>
          <button id='btn1' className="btn btn-primary" onClick={deleteFun} >Delete Book</button>
          {/* <a id='dlete' href={link}>Delete</a> */}
        </div>
      </div>
    </div>
  )
}

export default BookDetails

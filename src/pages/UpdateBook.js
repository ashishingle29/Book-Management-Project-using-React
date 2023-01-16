import { useParams } from 'react-router-dom';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../CSS/BookDetails.css"

function UpdateBook() {
    const [bookCover, setBookCover] = useState("bookCover")
    const [title, setTitle] = useState("title")
    const [excerpt, setExcerpt] = useState("excerpt")
    const [ISBN, setISBN] = useState("ISBN")
    const [category, setCategory] = useState("")
    const [subcategory, setSubcategory] = useState("")
    const [releasedAt, setReleasedAt] = useState("")
    const { bookId } = useParams();

    let token = localStorage.getItem("token")
    useEffect(() => {
        axios.get(`http://localhost:3001/books/${bookId}`, { headers: { "x-api-key": token } }).then((responce) => {
            const data = responce.data.data
            setTitle(data.title)
            setCategory(data.category)
            setExcerpt(data.excerpt)
            setISBN(data.ISBN)
            setSubcategory(data.subcategory)
            setReleasedAt(data.releasedAt)
            setBookCover(data.bookCover)
        })
            .catch((err) => alert(err.message))
    }, [])

    const updateFunc = (e) => {
        e.preventDefault();
        console.log("updated")
        const newData = {}

        newData.title = title
        newData.category = category
        newData.excerpt = excerpt
        newData.ISBN =setISBN(ISBN);
        newData.subcategory = subcategory;
        newData.releasedAt = releasedAt;

        console.log(newData)
        
    }


    return (
        <div id='bigBoxBD'>
            <div id="container">
                <img src={bookCover} className='imputCB' style={{ width: "10vh", height: "10vh" }} />
                <div>Title: <input className='imputCB' value={title} onChange={(e) => setTitle(e.target.title)} /></div>
                <div>Input: <input className='imputCB' value={title} /></div>
                <div>excerpt: <input className='imputCB' value={excerpt} onChange={(e) => setExcerpt(e.target.excerpt)} /></div>
                <div>ISBN: <input className='imputCB' value={ISBN} onChange={(e) => setISBN(e.target.ISBN)} /></div>
                <div>category: <input className='imputCB' value={category} /></div>
                <div>subcategory: <input className='imputCB' value={subcategory} /></div>
                {/* <div>reviews: <input className='imputCB' value={reviews} /></div>
                <div>isDeleted: <input className='imputCB' value={isDeleted} /></div> */}
                <div>releasedAt: <input className='imputCB' value={releasedAt} /></div>
                {/* <div>createdAt: <input className='imputCB' value={createdAt} /></div>
                <div>updatedAt: <input className='imputCB' value={updatedAt} /></div> */}
                {/* <div>reviewsData: <p>{value.reviewsData.length}</p></div> */}
                <div>
                    <button id='btn1' className="btn btn-primary" onClick={updateFunc} >Update Book</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateBook
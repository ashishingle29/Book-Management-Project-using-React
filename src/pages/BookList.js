import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import "../CSS/bookList.css"



function BookList() {
    const [books, SetBooks] = useState([])
    
    let token = localStorage.getItem('token');

    useEffect(() => {
        axios.get("http://localhost:3001/books", { headers: { "x-api-key": token } }).then((responce) => { SetBooks(responce.data.data) })
            .catch((err) => alert(err.message))
    }, [])


    return (
        <div id='bookListBigBox'>
            <>
                <Navbar />
                <div id="allList">
                    {books.map((x, i) => {
                        return (<div className="itemBox" key={i}>

                            <img id='books' src={(x.bookCover) ? `${x.bookCover}` : "https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=590&h=800&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED"} alt='error' />
                            <span>{x.title}</span>
                            <span>User : {x.userId.name}</span>
                            <span>Reviews : {x.reviews}</span>
                            
                            <a href={`/bookDetails/${x._id}`}><button id='btn1' className="btn btn-primary" >More Details</button></a>
                        </div>)
                    })}
                </div>
            </>
            <div id='sideBox'>
                <a id='cbBtn' href='/createBook'>Create Book</a>
            </div>
        </div>
    )
}

export default BookList

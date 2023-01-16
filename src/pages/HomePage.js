import React from 'react'
import "../CSS/Home.css"
import Navbar from '../Components/Navbar'

function HomePage() {
  return (
    <div id='bigBoxHome'>
        <Navbar/>
         <div className="boxBtns">
          <h4>Create a book form here 👇</h4>
         <a href='/createBook'><button id='btn2' className="btn btn-primary">Create Book</button></a>
         </div>
    </div>
  )
}

export default HomePage

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import BookList from './pages/BookList';
import BookDetails from './pages/BookDetails';
import CreateBook from './pages/CreateBook';
import UpdateBook from './pages/UpdateBook'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='login' element={<Login />} />
        <Route path='resister' element={<Register />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='bookList' element={<BookList />} />
        <Route path='bookDetails' element={<BookDetails />}>
          <Route path=':bookId' element={<BookDetails />} />
        </Route>
        <Route path='createBook' element={<CreateBook />} />
        <Route path='updateBook' element={<UpdateBook />}>
          <Route path=':bookId' element={<UpdateBook />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Book from './Book'
import Form from './Form'

export default function BooksList() {
  let [modal, setModal] = useState(false)
    const {books} = useSelector((state) => state.books)
    const {carts} = useSelector((state) => state.books)
    // console.log(carts);
    // console.log(books);
  return (
    <div>
        <p>BooksList</p>
        {books.map(book=> <Book key={book.id} book={book}>Название</Book>)}
        {carts.map(cart => <p key={cart.id}>Carts {cart.name}</p>)}
        <button onClick={()=>setModal(modal =! modal)}>{modal ? 'Close':'Add Book'}</button>
        {modal && <Form></Form>}
    </div>
  )
}

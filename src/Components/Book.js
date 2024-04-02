import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteBook, addBook, addCart } from '../store/slice/bookSlice'

export default function Book({book}) {
    const dispatch = useDispatch()
  return (
    <div>
        <p>Название: {book.name}</p>
        <p>id {book.id}</p>
        <button onClick={() => dispatch(deleteBook(book.id))}>X</button>
        <button onClick={() => dispatch(addCart(book))}>Add to cart</button>
    </div>
  )
}

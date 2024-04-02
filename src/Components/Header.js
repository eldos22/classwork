import React from 'react'
import { useDispatch } from 'react-redux'
import { sortedBooks } from '../store/slice/bookSlice'

export default function Header() {
    const dispatch = useDispatch()
  return (
    <div>
        Header
        <button onClick={()=> dispatch(sortedBooks('low'))}>Low</button>
        <button onClick={()=> dispatch(sortedBooks('high'))}>High</button>
    </div>
  )
}

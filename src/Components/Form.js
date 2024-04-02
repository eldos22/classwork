import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../store/slice/bookSlice'

export default function Form() {
    const dispatch = useDispatch()
    const refForm = useRef(null)
    const sendForm = (event) => {
      event.preventDefault()
      const obj = {
        id: Date.now(),
        name: refForm.current.name.value
        }
        dispatch(addBook(obj))
        refForm.current.name.value = ''
      }
        //console.log(refForm.current.name.value);
  return (
    <div>
      <form onSubmit={(event) => sendForm(event)} ref={refForm}>
        <input type='text' name='name'></input>
        <button type='submit'>Add new book</button>
        </form>
    </div>
  )
}

import React, { useState } from "react";
import css from './input.module.css'
// Get the value from the input field
// push the value to the array (list data)

function Input({onSubmit}){
  const[text, setText] = useState('')

function handleChange(e){
setText(e.target.value)
}


  return<div>
    <input onChange={handleChange} value={text}/>
    <button className={css.button} onClick={function()
    {onSubmit(text)
    setText('')}

    }>Add</button>
  </div>
}

export default Input;




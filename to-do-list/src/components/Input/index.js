import React, { useState } from "react";
import todoLists from "../../libs/data";
// Get the value from the input field
// push the value to the array (list data)

function Input({onSubmit}){
  const[text, setText] = useState('')

function handleChange(e){
setText(e.target.value)
}

  return<div>
    <input onChange={handleChange} value={text}/>
    <button onClick={function(){onSubmit(text)}}>Add todo</button>
  </div>
}

export default Input;



// let textInput = React.createRef();

// // const [list, setList] = useState(todoLists);



// function Button(props) {
//   return <button onClick={props.onClick}> Add me!</button>;
// }

// function Input(handleClick, props) {
//   return (
//     <div>
//       <input ref={textInput} />
//       <Button onClick={handleClick} />
//     </div>
//   );
// }

// export default Input;

// we got the value -> textInput.current.value but we don't know how to pass it to todoLists array
//

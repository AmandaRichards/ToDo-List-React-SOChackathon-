import React, { useState } from "react";
import todoLists from "../../libs/data";
// Get the value from the input field
// push the value to the array (list data)

let textInput = React.createRef();

// const [list, setList] = useState(todoLists);

function handleClick(input) {
  // setList(...list, {
  //   listItemId: 5,
  //   text: "Go to Tesco for buying a box of tea bags",
  //   date: "07/01/22",
  // });
  console.log(textInput.current.value);
  // const inputValue = textInput.current.value;
  // return inputValue;
}

function Button(props) {
  return <button onClick={props.onClick}> Add me!</button>;
}

function Input(props) {
  return (
    <div>
      <input ref={textInput} />
      <Button onClick={handleClick} />
    </div>
  );
}

export default Input;

// we got the value -> textInput.current.value but we don't know how to pass it to todoLists array
//

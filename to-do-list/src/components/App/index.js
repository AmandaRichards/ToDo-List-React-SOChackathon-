import "./index.css";
import Input from "../Input";
import List from "../List";
import React, { useState } from "react";
import todoLists from "../../libs/data";

function App() {
  const [lists, setLists] = useState(todoLists);
  let textInput = React.createRef();

  function handleClick() {
    let value = textInput.current.value;
    let newListItem = {
      listItemId: 5,
      text: value,
      date: "07/01/22",
    };
    setLists(...lists, newListItem);
    console.log(textInput.current.value);
    // const inputValue = textInput.current.value;
    // return inputValue;
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <Input />
      {lists.map(function (props) {
        return <List text={props.text} date={props.date} />;
      })}
      <List />
    </div>
  );
}

export default App;

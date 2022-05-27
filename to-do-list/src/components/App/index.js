import "./index.css";
import Input from "../Input";
import List from "../List";
import React, { useState } from "react";
import todoLists from "../../libs/data";
import ListItem from "../List-item";

function App() {
  const [lists, setLists] = useState([]);
  // const [input, setInput] = useState('')
  // let textInput = React.createRef();

  function addToDO(item){
     setLists([...lists, item]);
  }

  function removeToDo(index){
setLists([...lists.slice(0, index), ...lists.slice(index+1)])
  }


  return (
    <div className="App">
      <h1>To Do List</h1>
      <Input onSubmit={addToDO}/>
     <List lists={lists} removeToDo={removeToDo}/>
    </div>
  );
}

export default App;

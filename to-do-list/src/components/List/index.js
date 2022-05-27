import { useState } from "react";
import todoLists from "../../libs/data";
import ListItem from "../List-item";

function List(props) {
  const [lists, setLists] = useState(todoLists);
  return (
    <ul>
      {lists.map(function (props, index) {
        return <ListItem key={index} text={props.text} date={props.date} />;
      })}
    </ul>
  );
}

export default List;

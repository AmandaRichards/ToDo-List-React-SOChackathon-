import ListItem from "../List-item";

function List({lists, text, date, removeToDo}) {
  
  return (
    <ul>
     {lists.map(function (list, index) {
        return <ListItem text={list} onDelete={function(){
          removeToDo(index)}}/>;
      })}
        {/* <ListItem  text={text} date={date} onDelete={onDelete} />   */}
    </ul>
  );
}

export default List;

//key={listItemId}
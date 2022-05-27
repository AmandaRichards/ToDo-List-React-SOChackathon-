import ListItem from "../List-item";
import css from './list.module.css'

function List({lists, text, date, removeToDo}) {
  
  return (
    <div className={css.container}>
    <ul className={css.ul}>
     {lists.map(function (list, index) {
        return <ListItem text={list} onDelete={function(){
          removeToDo(index)}}/>;
      })}
        {/* <ListItem  text={text} date={date} onDelete={onDelete} />   */}
    </ul>
    </div>
  );
}

export default List;

//key={listItemId}
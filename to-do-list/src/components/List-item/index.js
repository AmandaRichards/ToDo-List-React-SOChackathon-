import css from './ListItem.module.css'

function ListItem({ index, text, date, onDelete }) {
  return (
    <li className={css.li} key={index}>
      {text}
      <span> {date}</span>
     
       <input type="checkbox" className={css.checkbox}  />
        <button className={css.button} onClick={onDelete}>Remove</button>
    </li>
  )
}

export default ListItem;

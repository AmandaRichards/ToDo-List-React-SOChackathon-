import css from './ListItem.module.css'

function ListItem({ index, text, date, onDelete }) {
  return (
    <li className={css.li} key={index}>
      {text}
      <span> {date}</span>
      <button className={css.button} onClick={onDelete}>Done</button>
    </li>
  )
}

export default ListItem;

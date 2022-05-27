function ListItem({ index, text, date, onDelete }) {
  return (
    <li key={index}>
      {text}
      <span> {date}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  )
}

export default ListItem;

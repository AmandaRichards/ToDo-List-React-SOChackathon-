function ListItem({ listItemId, text, date }) {
  return (
    <li key={listItemId}>
      {text}
      <span> {date}</span>
    </li>
  );
}

export default ListItem;

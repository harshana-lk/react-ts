import { MouseEvent } from "react";

const ListGroup = () => {
  let items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
    "Berlin",
  ];

  //   Event Handler
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
export default ListGroup;

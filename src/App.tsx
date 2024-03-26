import ListGroup from "./components/ListGroup";

const App = () => {
  let items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
    "Berlin",
  ];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
};
export default App;

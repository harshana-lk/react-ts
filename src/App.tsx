import ListGroup from "./components/ListGroup";

const App = () => {
  const items = ["Badulla", "Colombo", "Kandy", "Panadura"];
  return (
    <div>
      <ListGroup heading="Sri Lanka" items={items} onSelectItem={() => {}} />
    </div>
  );
};
export default App;

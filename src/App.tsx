import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <Alert>
        Hello World <span>Hello Hello</span>
      </Alert>
      <Button color="danger" onClick={() => console.log("click")}>
        MyButton
      </Button>
    </div>
  );
};
export default App;

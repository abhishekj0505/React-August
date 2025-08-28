import { useContext } from "react";
import "./App.css";
import userContext from "./context/UserContext";

function App() {
  const { count, increment, decrement, reset } = useContext(userContext);

  return (
    <>
      <h1>Context API for Counter </h1>
      <div>Counter : {count}</div>
      <br />
      <br />
      <button onClick={increment}>Increse</button>
      <br />
      <br />
      <button onClick={decrement}>Decrese</button>
      <br />
      <br />
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;

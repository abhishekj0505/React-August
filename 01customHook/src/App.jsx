import "./App.css";
import useCounter from "./useCounter";

function App() {
  const { increment, decrement, reset, count } = useCounter();

  return (
    <>
      <h1>This is custom hook for counter.</h1>
      <h1>Counter : {count} </h1>
      <button onClick={increment}>Increase</button>
      <br />
      <br />
      <button onClick={decrement}>Decrese</button>
      <br />
      <br />
      <button onClick={reset}>Reset</button>
      <br />
    </>
  );
}

export default App;

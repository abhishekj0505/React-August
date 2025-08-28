import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, reset } from "./counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter from redux-toolkit.</h1>
      <div>Counter : {count}</div>
      <br />
      <br />
      <button onClick={() => dispatch(increment())}>Increase Counter</button>
      <br />
      <br />
      <button onClick={() => dispatch(decrement())}>Decrease Counter</button>
      <br />
      <br />
      <button onClick={() => dispatch(reset())}>Reset Counter</button>
    </>
  );
}

export default App;

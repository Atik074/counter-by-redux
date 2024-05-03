import "./App.css";
import { IncrementByValue, decrement, increment } from "./redux/feature/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";


function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1> react redux</h1>

      <div>
      <div>
        <button
            style={{margin:'0 5px'}}
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          style={{margin:'0 5px'}}
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          style={{margin:'0 5px'}}
          onClick={() => dispatch(IncrementByValue(5))}
        >
          IncrementByValue
        </button>
      </div>
    </div>
    </>
  );
}

export default App;

import React from "react";
import style from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement, Reset } from "./action";
function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  function handleDecrement() {
    dispatch(Decrement());
  }
  function handleIncrement() {
    dispatch(Increment());
  }
  function handleReset() {
    dispatch(Reset());
  }
  return (
    <>
      <div className={style.big}>
        <div className={style.container}>
          <h1>Counter App</h1>
          <hr />
          <h2>Count:{count}</h2>

          <div className={style.btn}>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Counter;

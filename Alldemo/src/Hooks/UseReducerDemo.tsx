// The useReducer Hook is the alternative to useState Hook.
// If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

import { useReducer, useState } from "react";
import { counterReducer, initialState } from "./counterReducer";

// The useReducer Hook returns the current (state) and a (dispatch) method.

// State as the name suggest will be the "state" of your component.
// dispatch will allow you to change that state, Think of it is like [val, setVal]

// useReducer accepts two parameters (reducer, initialState)

// The reducer function contains your custom state logic
//  The initialState can be a simple value but generally will contain an object.

// 1 👇
// import { useReducer } from "react";

// const Counter = () => {
//   // 2 👇
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       {/*  6 👇 */}
//       <button onClick={() => dispatch({ type: "increment" })}>+</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//       <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//       <h1>{state.count}</h1>
//     </div>
//   );
// };

// // 3 👇
// const initialState = { count: 0 };

// // 4 👇
// const reducer = (state, action) => {
//   // 5 👇
//   switch (action.type) {
//     case "increment":
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case "decrement":
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     case "reset":
//       return {
//         ...state,
//         count: 0,
//       };
//     default:
//       return state;
//   }
// };

// const UseReducerDemo = () => {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// };

// export default UseReducerDemo;

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  const handleIncrement = () => {
    return dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    return dispatch({ type: "decrement" });
  };

  const handleIncrementByAmount = () => {
    dispatch({type:"incrementByAmount", payload:Number(inputValue)})
    setInputValue(0)
  };
  const handleDecrementByAmount = () => {
    dispatch({type:"decrementByAmount", payload:Number(inputValue)})
    setInputValue(0)
  };

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleIncrementByAmount}>Add</button>
        <button onClick={handleDecrementByAmount}>Subtract</button>
      </div>
    </div>
  );
}

export default Counter;

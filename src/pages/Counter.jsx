import React, { useReducer } from "react";

const Counter = () => {
  const initialState = 0;

  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + 1;
    }
    if (action.type === "DECREMENT") {
      return state - 1;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="bg-cyan-100 border-cyan-400 border-2 rounded-xl w-80 mt-32 mx-auto self-center p-10">
      <h1 className="p-3 font-bold text-2xl  text-center">{state}</h1>
      <div className="flex justify-center gap-4">
        <button
          className="bg-purple-400 text-white font-bold rounded p-3"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
        <button
          className="bg-emerald-400 rounded text-white font-bold p-3"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;

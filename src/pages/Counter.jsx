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
    <div className="bg-emerald-50 border-emerald-100 border-4 rounded-xl w-4/12 mt-32 mx-auto self-center p-10">
      <h1 className="p-3 font-bold text-slate-500 text-2xl  text-center">
        {state}
      </h1>
      <div className="flex justify-center gap-4">
        <button
          className="bg-purple-200  rounded p-3"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
        <button
          className=" bg-cyan-200 rounded   p-3"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;

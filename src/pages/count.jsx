import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/reducer/counter";

export const 
Counters = () => {
  const data = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{data.count}</h1>
      <div className="flex gap-2">
      <button className="border border-black rounded-lg p-1" onClick={() => dispatch(increment())}>+</button>
      <button className="border border-black rounded-lg p-1" onClick={() => dispatch(decrement())}>-</button>
      </div>
    </>
  );
};

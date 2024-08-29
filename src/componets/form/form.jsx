import React from "react";
import { add } from "../../redux/reducer/todo";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";


const Form = () => {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch()
  const submit = (e) => {
    e.preventDefault();
    dispatch(add({taksName:input, id:nanoid()}))
    setInput("")

  };

  return (
    <form onSubmit={submit}>
      <input
        value={input}
        className="border"
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="name"
      />
      <button type="submit" className="border border-black rounded-lg p-1">submit</button>
    </form>
  );
};

export default Form;

import React from "react";
import { useSelector } from "react-redux";
import Card from "./card/card";
import { nanoid } from "@reduxjs/toolkit";

const CardContainer = () => {
  const { task } = useSelector((state) => state.todo);
  return <div>

    {task.map((item)=> <Card key={nanoid} {...item}/>)}
    
    </div>;
};

export default CardContainer;

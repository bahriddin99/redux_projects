import React from "react";
import { useDispatch } from "react-redux";
import { deletTask,editTask } from "../../redux/reducer/todo";

const Card = ({ taksName, id }) => {
  const [input, setInput] = React.useState(taksName);
  const [show, setShow] = React.useState(false);
  const dispatch = useDispatch();

  const deletItem = () => {
    dispatch(deletTask({ id }));
  };

  const onsubmit = (e) => {
    e.preventDefault();
    dispatch(editTask({taksName:input, id}))
    setShow(false);
  };

  return (
    <div className="">
      {show ? (
        <form onSubmit={onsubmit}>
          <input
            className="border"
            type="text"
            placeholder="name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      ) : (
        <h2 className=" ">{taksName}</h2>
      )}

   {
    !show && <>
       <button className="border border-red-500" onClick={deletItem}>
        delet
      </button>
      <button className="border border-red-500" onClick={() => setShow(true)}>
        edit
      </button>
    </>
   }
    </div>
  );
};

export default Card;

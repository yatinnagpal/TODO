import React from "react";
import "./styles.scss";
import { toDo } from "../model";
import SingleToDo from "./SingleToDo";

interface Props {
  toDos: toDo[];
  setToDos: React.Dispatch<React.SetStateAction<toDo[]>>;
}
const ToDoList: React.FC<Props> = (props) => {
  const toDos = props.toDos;
  const setToDos = props.setToDos;
  return (
    <div className="todos">
      {toDos.map((todo) => (
        <SingleToDo todo={todo} toDos={toDos} setToDos={setToDos} />
      ))}
    </div>
  );
};

export default ToDoList;

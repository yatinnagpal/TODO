import React, { useState, useEffect, useRef } from "react";
import { toDo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.scss";

interface Props {
  todo: toDo;
  toDos: toDo[];
  setToDos: React.Dispatch<React.SetStateAction<toDo[]>>;
}
const SingleToDo: React.FC<Props> = (props) => {
  const todo = props.todo;
  const toDos = props.toDos;
  const setToDos = props.setToDos;
  const [edit, setEdit] = useState<boolean>(false);
  const [editToDo, setEditToDo] = useState<string>(todo.toDo);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setToDos(
      toDos.map((todo) => (todo.id === id ? { ...todo, toDo: editToDo } : todo))
    );
    console.log(editToDo);
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    if (edit) {
      setToDos(
        toDos.map((todo) =>
          todo.id === id
            ? { ...todo, toDo: editToDo, isDone: !todo.isDone }
            : todo
        )
      );
      setEdit(false);
    } else {
      setToDos(
        toDos.map((todo) =>
          todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        )
      );
    }
  };

  return (
    <form className="todos___single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          value={editToDo}
          onChange={(e) => setEditToDo(e.target.value)}
          className="todos__single--text"
          ref={inputRef}
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.toDo}</s>
      ) : (
        <span className="todos__single--text">{todo.toDo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleToDo;

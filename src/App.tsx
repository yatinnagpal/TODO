import React, { useState } from "react";
import InputField from "./components/InputField";
import "./App.css";
import { toDo } from "./model";
import ToDoList from "./components/ToDoList";

const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>("");
  const [toDos, setToDos] = useState<toDo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (toDo) {
      setToDos([...toDos, { id: Date.now(), toDo, isDone: false }]);
      setToDo("");
    }
  };
  console.log(toDos);
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
      <ToDoList toDos={toDos} setToDos={setToDos} />
    </div>
  );
};

export default App;

import axios from "axios";
import { useState, useEffect } from "react";
import "./ToDoList.css";

function ToDoList() {
  const [completedTodos, setCompletedTodos] = useState([]);
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function handlePush() {
    if (todo !== "") {
      axios
        .post("http://localhost:8000/api/tasks", {
          name: todo,
        })
        .then(() => {
          handleGetTodos();
        });
      setTodo("");
    }
  }

  function handleComplete(id) {
    const todo = todos.find((todo) => todo.id === id);
    if (todo && todo.id) {
      axios.put(`http://localhost:8000/api/tasks/` + todo.id).then(() => {
        handleGetTodos();
      });
    } else {
      console.error(`No todo found with id: ${id}`);
    }
  }

  function handleDelete(index) {
    axios
      .delete(`http://localhost:8000/api/tasks/` + completedTodos[index].id)
      .then(() => {
        handleGetTodos();
      });
  }

  function handleGetTodos() {
    axios.get("http://localhost:8000/api/tasks").then((res) => {
      let tmpCompletedTodos = [];
      let tmpTodos = [];
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].Finished) {
          tmpCompletedTodos = tmpCompletedTodos.concat([
            {
              id: res.data[i].ID,
              name: res.data[i].Name,
            },
          ]);
        } else {
          tmpTodos = tmpTodos.concat([
            {
              id: res.data[i].ID,
              name: res.data[i].Name,
            },
          ]);
        }
      }
      setCompletedTodos(tmpCompletedTodos);
      setTodos(tmpTodos);
    });
  }

  useEffect(() => {
    handleGetTodos();
  }, []);

  return (
    <div className="todoList">
      <h1 className="title">目標リスト</h1>
      <div className="input-container">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="input"
        />
        <button onClick={handlePush} className="button">
          登録
        </button>
      </div>
      <div className="todoList"></div>
      <h3>達成済み目標</h3>
      {completedTodos.length > 0 && (
        <ul className="ul">
          {completedTodos.map((completedTodo, index) => (
            <li key={index} className="li">
              ・{completedTodo.name}
              <button onClick={() => handleDelete(index)} className="button">
                タスクを消す
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3>タスク一覧</h3>
      {todos.length > 0 && (
        <ul className="ul">
          {todos.map((todo, index) => (
            <li key={index} className="li">
              ・{todo.name}
              <button
                onClick={() => handleComplete(todo.id)}
                className="button"
              >
                達成
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ToDoList;

import { FormEvent, useState } from "react";

type TodoTypes = {
  id: number;
  item: string;
};

const TodoList = () => {
  const [item, setItem] = useState<string>("");
  const [todos, setTodos] = useState<TodoTypes[]>([]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      item,
    };
    setTodos((curTodos) => [...curTodos, newTodo]);
    setItem("");
  }

  return (
    <div>
      <h1>Challenge-3 Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h1>Id - #{todo.id}</h1>
            <h2>{todo.item}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

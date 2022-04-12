import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish React Series",
      isComplete: false,
    },
    {
      id: 2,
      title: "Go Grocery",
      isComplete: true,
    },
    {
      id: 3,
      title: "Take over world",
      isComplete: false,
    },
  ]);

  const [todoInput, setTodoInput] = useState("");
  const [idForTodo, setIdForTodo] = useState(4);

  function addTodo(event) {
    event.preventDefault();
    if (todoInput.trim().length === 0) {
      return;
    }
    setTodos([
      ...todos,
      {
        id: idForTodo,
        title: todoInput,
        isComplete: false,
      },
    ]);
    setTodoInput("");
    setIdForTodo((prevIdForTodo) => prevIdForTodo + 1);
  }

  function deleteTodo(id) {
    console.log("deleting id : " + id);
    setTodos([...todos].filter((todo) => todo.id != id));
  }

  function handleInput(event) {
    setTodoInput(event.target.value);
  }

  return (
    <div className="container m-auto  mt-10 w-1/3   text-center ">
      <h1 className="mb-12 text-3xl font-extrabold">To Do App</h1>

      <form action="#" onSubmit={addTodo}>
        <input
          type="text"
          className=" mb-12 w-full rounded-sm border-2 border-gray-200 p-4"
          placeholder="What do you need to do?"
          value={todoInput}
          onChange={handleInput}
        />
      </form>

      <ul className="space-y-6">
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex flex-1 items-center">
                <div className="mr-4 h-6 w-6">
                  <input type="checkbox" className="h-6 w-6" />
                </div>
                <div className="text-2xl font-semibold">{todo.title}</div>
              </div>
              <button className="x-button" onClick={() => deleteTodo(todo.id)}>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <hr className="my-12" />
      <div className="flex items-center justify-between">
        <div>
          <div className="rounded-xl border-2 border-gray-200 p-2">
            Check All
          </div>
        </div>
        <span>3 items remaining</span>
      </div>

      <hr className="my-12" />
      <div className="flex items-center justify-between">
        <div>
          <div className="rounded-xl border-2 border-gray-200 p-2">All</div>
        </div>
        <span>Active</span>
        <span>Completed</span>
        <span>Clear completed</span>
      </div>
    </div>
  );
}

export default Todo;

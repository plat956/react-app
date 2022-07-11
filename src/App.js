import TodoList from "./Todo/TodoList";

function App() {
    const todos = [
        {id: 1, title: "todo1", completed: false},
        {id: 2, title: "todo2", completed: false},
        {id: 3, title: "todo3", completed: false}
    ];

  return (
      <div className="wrapper">
          <h1>React app</h1>
          <TodoList todos={todos} />
      </div>
  );
}

export default App;

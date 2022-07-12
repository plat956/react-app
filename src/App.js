import React, { useEffect } from 'react'
import TodoList from "./Todo/TodoList"
import Context from "./context"
import Loader from "./Loader"
import Modal from "./Modal/Modal"

const AddTodo = React.lazy(() => import('./Todo/AddTodo'))

function App() {
    const [todos, setTodos] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    function toggleTodo(id) {
        setTodos(todos.map(t => {
            if(t.id === id) {
                t.completed = !t.completed;
            }
            return t;
        }));
    }

    function removeTodo(id) {
        setTodos(todos.filter(t => t.id !== id));
    }

    function addTodo(title) {
        setTodos([...todos, { id: Date.now(), title: title, completed: false}])
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
          .then(response => response.json())
          .then(todos => {
                setTodos(todos);
                setLoading(false);
          })
    }, []);

  return (
      <Context.Provider value={{removeTodo}}>
          <div className="wrapper">
              <h1>React app</h1>

              <React.Suspense fallback={<p>Loading...</p>}>
                <Modal />
                <AddTodo onCreate={addTodo} />
              </React.Suspense>

              {loading && <Loader /> }
              {todos.length > 0 ?
                <TodoList todos={todos} onToggle={toggleTodo} />
                :
                loading ? null : <p>No todos</p>
              }

          </div>
      </Context.Provider>
  );
}

export default App;

import Todo from './Todo.jsx';
import { useContext } from "react";
import { TodosContext } from "../TodosContext.js";


function TodosList() {

  const store = useContext(TodosContext);

  function deleteHandler(id) {
    if (confirm('Are you sure you want to delete the todo?')) {
      store.setTodos(todos.filter(todo => todo.id !== id));    
    }
  }

  function toggleIsDoneHandler(id) {
    store.setTodos(store.todos.map(todo => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
        return todo;
      } else {
        return todo;
      }    
    }));
  }

  return (
    <>
        <div className="todos">
          {store.todos.map(todo => 
            <Todo
              deleteTodo={(id) => deleteHandler(id)}
              toggleIsDone={(id) => toggleIsDoneHandler(id)}
              todo={todo}
              key={todo.id}
            />
            )}
        </div>
    </>
  )
}

export default TodosList
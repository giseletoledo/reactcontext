import Todo from './Todo.jsx';
import { useContext } from "react";
import { TodosContext } from "../TodosContext.js";


function TodosList() {

  const store = useContext(TodosContext);

  return (
    <>
        <div className="todos">
          {store.todos.map(todo => 
            <Todo
              todo={todo}
              key={todo.id}
            />
            )}
        </div>
    </>
  )
}

export default TodosList
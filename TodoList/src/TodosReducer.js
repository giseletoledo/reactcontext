export default function todosReducer(todos,action) {
    switch (action.type) {
        case 'deleted': {
            if (confirm('Are you sure you want to delete the todo?')) {
               return todos.filter(todo => todo.id !== action.id);    
              }
        }
    }
}
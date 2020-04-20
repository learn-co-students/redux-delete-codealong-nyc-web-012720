import uuid from 'uuid'

export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':
      const todo = {
        id: uuid(),
        text: action.payload.text
      }
      return { todos: state.todos.concat(todo) };
    case 'DELETE_TODO':
      const newTodos = state.todos.filter(todo => todo.id !== action.payload)
      return {todos: newTodos}
    default:
      return state;
  }
}

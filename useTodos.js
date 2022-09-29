import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Creamos una constante para determinar cuantos elementos tenemos en la lista.
  const todosCount = todos.length;

  // Creamos una constante para determinar cuantas tareas tenemos pendientes de la lista.
  const pendingTodosCount = todos.filter((todo) => !todo.done).length;

  // Función donde agregaremos un nuevo elemento a la lista.
  const handleNewTodo = (todo) => {
    const action = {
      type: 'Add Todo',
      payload: todo,
    };

    dispatch(action);
  };

  // Función para eliminar un elemento de la lista.
  const handleDeleteTodo = (id) => {
    dispatch({
      type: 'Remove Todo',
      payload: id,
    });
  };

  // Función donde cambiaremos el estado de la tarea que llega por parámetro.
  const handleToggleTodo = (id) => {
    dispatch({
      type: 'Toogle Todo',
      payload: id,
    });
  };

  useEffect(() => {
    // console.log(todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};

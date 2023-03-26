import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ToDoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoAddHandler = (text: string) => {
    // NOTE: prevTodos is the current todos copy
    setTodos((prevTodos) => [
      ...prevTodos,
      // Generate a unique ID
      { id: uuidv4(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className='App'>
      <NewTodo onAddTodo={todoAddHandler} />
      <ToDoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;

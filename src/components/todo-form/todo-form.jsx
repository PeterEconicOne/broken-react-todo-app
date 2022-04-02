import React, { useState, useContext } from 'react';
import { TodosContext } from '../../todo-context';
import './todo-form.scss';

export const TodoForm = () => {
  const { todos, setTodos } = useContext(TodosContext);
  const [task, setTask] = useState('');

  // 1. Handle input task to become todo
  // 2.We need to check number ot todos so we can calculate new id
  // 3.Clearing the input state after adding
  // 4. I used ternary you can use ifs
  const handleAddTodo = () => (task ? setTodos([...todos,
    {
      id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
      label: task,
      checked: false,
    }]) && setTask('') : null);

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};

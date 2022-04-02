import React, { useContext } from 'react';
import { TodosContext } from '../../todo-context';
import './todo-results.scss';

export const TodoResults = () => {
  const { todos } = useContext(TodosContext);

  // get the length after filtering them
  const calculateChecked = () => todos.filter((el) => el.checked).length;

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};

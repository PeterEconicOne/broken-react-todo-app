import * as React from 'react';
import './todo-results.scss';
import { TodosContext } from '../../todo-context';

export const TodoResults = () => {
  const { todos } = React.useContext(TodosContext);

  const calculateChecked = () => (
    todos.reduce((sum, current) => {
      const isDone = current.checked ? 1 : 0;
      return (sum + isDone);
    }, 0));

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};

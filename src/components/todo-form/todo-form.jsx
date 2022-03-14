import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-form.scss';

export const TodoForm = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState('');
  const [error, setError] = React.useState('');

  const handleAddTodo = () => {
    if (!task) {
      setError('Enter the name');
    } else {
      setTodos(todos.concat([{
        id: todos.length ? todos[todos.length - 1].id + 1 : 0,
        label: task,
        checked: false,
      }]));
      setTask('');
    }
  };

  const handleKeyUp = (e) => {
    setError('');
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        className={error ? 'error' : ''}
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

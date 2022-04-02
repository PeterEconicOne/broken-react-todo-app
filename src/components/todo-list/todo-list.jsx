import React, { useContext } from 'react';
import { Checkbox } from '../checkbox';
import { TodosContext } from '../../todo-context';
import './todo-list.scss';

export const TodoList = () => {
  const { todos, setTodos } = useContext(TodosContext);
// simple .filter() or map() will do it for both
  const handleDelete = (id) => setTodos(todos.filter((el) => el.id !== id));

  const toggleCheck = (id) => setTodos(
    todos.map(
      (el) => (el.id === id ? { ...el, checked: !el.checked } : el),
      ),
    );

    const handleKeyUp = (e, id) => {
      if (e.keyCode === 13) {
        toggleCheck(id);
      }
    };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">Looks like you&apos;re absolutely free today!</div>
      )}
    </div>
  );
};

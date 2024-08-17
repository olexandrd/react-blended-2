import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { Text, Form, TodoList, EditForm } from 'components';

export const Todos = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const onSubmit = text => {
    const toDo = {
      id: nanoid(),
      text,
    };

    setTodos(prev => [...prev, toDo]);
  };
  const deleteTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const editToDo = todo => {
    setCurrentTodo(todo);
    setIsEditing(true);
  };

  const updateTodos = text => {
    setTodos(prevState =>
      prevState.map(todo =>
        todo.id === currentTodo.id ? { ...currentTodo, text } : todo,
      ),
    );
    cancelUpdate();
  };

  const cancelUpdate = () => {
    setIsEditing(false);
    setCurrentTodo({});
  };

  return (
    <>
      {isEditing ? (
        <EditForm
          defaultValue={currentTodo.text}
          updateTodos={updateTodos}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <Form onSubmit={onSubmit} />
      )}

      {todos.length > 0 ? (
        <TodoList todos={todos} deleteTodo={deleteTodo} editToDo={editToDo} />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};

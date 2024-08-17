import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Text, Form, TodoList } from 'components';

export const Todos = () => {
  const [todos, setTodos] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('todos')) ?? [];
    } catch (error) {
      return [];
    }
  });

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
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Form onSubmit={onSubmit} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <Text textAlign="center">There are no any todos ...</Text>
    </>
  );
};

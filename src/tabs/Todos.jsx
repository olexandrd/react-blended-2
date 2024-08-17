import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Text, Form } from 'components';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const onSubmit = text => {
    const toDo = {
      id: nanoid(),
      text,
    };

    setTodos(prev => [...prev, toDo]);
  };

  return (
    <>
      <Form onSubmit={onSubmit} />
      <Text textAlign="center">There are no any todos ...</Text>
    </>
  );
};

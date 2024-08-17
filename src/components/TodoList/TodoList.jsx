import { Grid, GridItem, TodoListItem } from 'components';

export const TodoList = ({ todos, deleteTodo, editToDo }) => {
  return (
    <Grid>
      {todos.map(({ id, text }, index) => (
        <GridItem key={id}>
          <TodoListItem
            id={id}
            text={text}
            num={index + 1}
            deleteTodo={deleteTodo}
            editToDo={editToDo}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

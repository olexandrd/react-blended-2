import { Grid, GridItem, TodoListItem } from 'components';

export const TodoList = ({ todos, deleteTodo }) => {
  return (
    <Grid>
      {todos.map(({ id, text }, index) => (
        <GridItem key={id}>
          <TodoListItem
            id={id}
            text={text}
            num={index + 1}
            deleteTodo={deleteTodo}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

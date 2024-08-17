import style from './TodoListItem.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { Text } from 'components';

export const TodoListItem = ({ id, text, num, deleteTodo, editToDo }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{num}
      </Text>
      <Text>{text}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={() => deleteTodo(id)}
      >
        <RiDeleteBinLine size={24} />
      </button>

      <button
        className={style.editButton}
        type="button"
        onClick={() => editToDo({ id, text })}
      >
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};

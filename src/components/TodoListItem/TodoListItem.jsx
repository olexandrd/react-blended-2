import style from './TodoListItem.module.css';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';

export const TodoListItem = ({ id, text, num, deleteTodo }) => {
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
    </div>
  );
};

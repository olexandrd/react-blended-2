import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import { toast } from 'react-hot-toast';
import style from './EditForm.module.css';

export const EditForm = ({ defaultValue, updateTodos, cancelUpdate }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.text.value.trim();
    if (!value) {
      toast.error('Add todo text!');
      return;
    }
    updateTodos(value);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={cancelUpdate}>
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={defaultValue}
        autoFocus
      />
    </form>
  );
};

import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

export const Form = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!input.trim()) {
      toast.error('Add search query!', { icon: '🔍' });
      return;
    }
    onSubmit(input.trim());
    setInput('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        onChange={handleChange}
        value={input}
      />
    </form>
  );
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  // Тут повинен бути власний хук для збереження і отримання даних з localStorage
  // Даний хук повинен отримувати key, defaultValue і повертати дані з localStorage,
  // якщо дані були збережені.
  // Якщо в localStorage не були збережені дані з ключем key, то хук повинен повертати defaultValue.

  const [value, setValue] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
    } catch (error) {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

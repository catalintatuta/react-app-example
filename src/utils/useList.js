import {useState} from 'react';

export const useList = (initialList) => {
  const [list, setList] = useState(initialList);

  const addToStart = (val) => {
    setList([val, ...list])
  }
  const addToEnd = (val) => {
    setList([...list, val])
  }

  const invert = () => {
    const reverseList = [...list].reverse();
    setList(reverseList);
  }

  return {
    list,
    addToStart,
    addToEnd,
    invert
  }
};

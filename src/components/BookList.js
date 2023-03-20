import React from 'react';
import {useGlobalList} from "../utils/ListContext";

export const BookList = () => {
  const {list} = useGlobalList();

  return (
    <div>
      {list.map((el) => (
        <p key={el.id}>
          {el.volumeInfo.title}
        </p>
      ))}
    </div>
  );
};

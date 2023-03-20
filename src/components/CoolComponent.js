import React from 'react';
import {useGlobalList} from "../utils/ListContext";

const CoolComponent = () => {
  const {list} = useGlobalList()
  return (
    <div>
      {list.length}
    </div>
  );
};

export default CoolComponent;

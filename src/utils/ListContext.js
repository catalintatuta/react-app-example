import {createContext, useContext, useState} from "react";

export const ListContext = createContext({
  list: [],
  addToStart: ()=>{},
  addToEnd: ()=>{},
  invert: ()=>{},
  changeList: ()=>{}
})

export const CustomProvider = ({children}) => {
  const [list, setList] = useState([]);

  const changeList = (newList) => {
    setList(newList);
  }
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

  return (
    <ListContext.Provider
      value={{
        list,
        addToStart,
        addToEnd,
        invert,
        changeList
      }}
    >
      {children}
    </ListContext.Provider>
  )
}

export const useGlobalList = () => {
  const ctx = useContext(ListContext);
  if (!ctx) {
    console.warn('No context');
  }
  return ctx;
}

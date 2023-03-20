import './App.css';
import {useEffect, useState} from "react";
import {useList} from "./utils/useList";
import {useGlobalList} from "./utils/ListContext";
import CoolComponent from "./components/CoolComponent";
import {booksService} from "./utils/BooksService";
import {BookList} from "./components/BookList";

const ListComponent = () => {
  const { list, invert, addToStart, addToEnd } = useGlobalList();

  return (
    <div>
      <button onClick={() => invert()} > Invert </button>
      <button onClick={() => addToStart(Date.now())} >Add to Start</button>
      <button onClick={() => addToEnd(Date.now())} > Add to End</button>
      {list.map(el => <p>{el}</p>)}
    </div>
  )
}
function App() {
  const {
    changeList
  } = useGlobalList()
  const initData = async () => {
    const data = await booksService.getBooks('Tarzan')
    changeList(data.items);
  }

  useEffect(() => {
    initData();
  }, []);

  return (
    <div className="App">
      <BookList />
    </div>
  );
}

export default App;

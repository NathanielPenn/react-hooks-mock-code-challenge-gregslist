import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(data => setItems(data))
  }, [])

  // const [removedItems, setRemovedItems] = useState([]);
  function handleDeleteItem(id){
    const handleDelete = items.filter((item) => item.id !== id)
    setItems(handleDelete);
    console.log(handleDelete);
  }
  return (
    <div className="app">
      <Header />
      <ListingsContainer items = {items} handleDelete = {handleDeleteItem}/>
    </div>
  );
}

export default App;

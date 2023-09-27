import Logo from "./Logo";
import Form from "./Form"
import PackingList from "./PackingList"
import { useState } from "react";


function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item])
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
    </div>
  )
}

export default App;

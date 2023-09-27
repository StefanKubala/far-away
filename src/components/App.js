import Logo from "./Logo";
import Form from "./Form"
import Stats from "./Stats"
import PackingList from "./PackingList"
import { useState } from "react";


function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item])
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onToggleItem={handleToggleItem} />
      <Stats items={items} />
    </div>
  )
}

export default App;

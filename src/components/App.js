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

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handleResetItems() {
    const confirm = window.confirm("Are you sure you want delete all items?");

    if (confirm) setItems([])
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onToggleItem={handleToggleItem} onDeleteItem={handleDeleteItem} onResetItems={handleResetItems} />
      <Stats items={items} />
    </div>
  )
}

export default App;

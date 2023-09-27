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

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats items={items} />
    </div>
  )
}

export default App;

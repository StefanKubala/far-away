import Logo from "./Logo";
import Form from "./Form"
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
    </div>
  )
}

export default App;

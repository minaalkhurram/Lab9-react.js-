// Greeting.js
import React, { useState } from "react";

export default function Greeting(props) {
  const [name, setName] = useState(props.name);
  const [newName, setNewName] = useState("");

  function handleClick() {
    setName(newName);
  }

  function handleChange(event) {
    setNewName(event.target.value);
  }

  return (
    <div>
          <p>Hello, {name}!</p>
      <input type="text" value={newName} onChange={handleChange} /><br></br>
      <button onClick={handleClick}>Change Name</button>
    
    </div>
  );
}

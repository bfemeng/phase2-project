import React, { useState, useEffect } from 'react'

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  console.log(inventory)
  
  useEffect(() => {
      fetch("http://localhost:3001/inventory")
      .then(res => res.json())
      .then(data => {
          console.log(data)
      })
  }, [])


  function handleClick(event) {
    console.log(event)
  }

//   function handleChange(event) {
//     console.log(event.target.value)
//   }

  function handleSubmit(event) {
    event.preventDefault()
    console.log("form submit")
  }

  return (
    <div>
      <h1>Inventory </h1>
      <button onClick={handleClick}>Click Me</button>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add item" value={inventory} onChange={e => setInventory(e.target.value)} 
      />
        {/* <select>
          <option value="1">High</option>
          <option value="2">Low</option>
        </select> */}
        <button type="submit">Submit item</button>
      </form>
    </div>
  )
}

export default Inventory
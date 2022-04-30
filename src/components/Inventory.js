import React, { useState, useEffect } from 'react'

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  
  useEffect(() => {
      fetch("http://localhost:3001/inventory")
      .then(res => res.json())
      .then(data => {
          console.log(data)
      })
  }, [])

    return (
    <div>
        Inventory
    </div>
  )
}

export default Inventory
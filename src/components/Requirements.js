import React, { useState, useEffect } from 'react'

const Requirements = () => {
  const [filetaxes, setFiletaxes] = useState("");
  const [requirements, setRequirements] = useState("")
  console.log(requirements)
  
    useEffect(() => {
        fetch("http://localhost:3001/requirements")
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }, [])

    function handleClick(event) {
      console.log(event)
    }

    function handleSubmit(event) {
      event.preventDefault()
      console.log("form submit")
    }

  return (
    <div>
      <hr></hr>
      <h1>Requirements </h1>
       <label>
        File Taxes
        <input
          type="checkbox"
          id="taxes"
          checked={filetaxes}
          onChange={(e) => setFiletaxes(e.target.checked)}
        />
      </label>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add item" value={requirements} onChange={e => setRequirements(e.target.value)} 
      />
        <button type="submit">Submit item</button>
      </form>
    </div> 
  )
}

export default Requirements
//      <button onClick={handleClick}>Click Me</button>
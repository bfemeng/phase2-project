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
      fetch (`http://localhost:3001/requirements`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({content:requirements})
      })
      .then(r => r.text())
      .then(data => {console.log(data)})
  }

    const listRequirements = Requirements.map((requirement) => <li>{requirements}</li>);
    console.log(listRequirements)

  return (
    <div>
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
      <ul>
        {listRequirements}
      </ul>
    </div> 
  )
}

export default Requirements

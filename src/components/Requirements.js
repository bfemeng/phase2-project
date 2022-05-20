import React, { useState, useEffect } from 'react'
import './index.css';

const RequirementsList = () => {
  const [requirements] = useState([]);
  const [requirementsList, setRequirementsList, onDeleteToDo] = useState([]);

  
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

    // const listRequirements = requirementsList.map(requirement => <li>{requirement.content}</li>);
    // console.log(listRequirements)

    function handleDelete() {
      fetch(`http://localhost:3001/requirements/`, {
        method: "DELETE",
      });
    //   onDeleteTodo to remove todo from state
      onDeleteToDo();
    }

  return (
    <div>
      <h1>Requirements </h1>
       {/* <label>
        File Taxes
        <input
          type="checkbox"
          id="taxes"
          //checked={filetaxes}
          //onChange={(e) => setFiletaxes(e.target.checked)}
        />
      </label> */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add requirement" value={requirements} onChange={e => setRequirementsList(e.target.value)} 
      />
        <button type="submit">Submit item</button>
        {/* <button className="delete-task" onClick={handleDelete} type="submit">Delete</button> */}
      </form>
      {/* <ul>
        {listRequirements}
      </ul> */}
    </div> 
  )
}

export default RequirementsList

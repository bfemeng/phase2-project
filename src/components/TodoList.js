import React, { useState, useEffect } from "react";
import Header from './Header'
// import './indextodos.css';

function Form() {
  const [todo, setTodo] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  function handleToDosChange(event) {
    setTodo(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch ('http://localhost:3001/todos', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({content:todo})
  })
  .then(r => r.json())
  .then(data => { const dataArray = [...submittedData, data];
    setSubmittedData(dataArray);
    setTodo("");})
  }

  useEffect(() => {
    fetch('http://localhost:3001/todos')
    .then((r) => r.json())
    .then(setSubmittedData);
}, []);

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.content}
      </div>
    );
  });

  
  return (
    <div>
      <Header/>
       <h3>Tasks to Take Care Of </h3>
        <form onSubmit={handleSubmit}>
          <div>{submittedData.map((data) => data.name)}</div>
            <input type="text" placeholder="Start typing..." onChange={handleToDosChange} value={todo} />
            <button type="submit">Add to List</button>
        </form>
      <ol>
       {listOfSubmissions} 
      </ol> 
    </div>
  );
}

export default Form;
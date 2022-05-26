import React, { useState, useEffect } from "react";

function Form() {
  const [todo, setTodo] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  function handleToDosChange(event) {
    setTodo(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch (`http://localhost:3001/todos`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({content:todo})
  })
  .then(r => r.json())
  .then(data => {const dataArray = [...submittedData, data];
    setSubmittedData(dataArray);
    setTodo("");})

    // const formData = { todo: todo };
    // const dataArray = [...submittedData, data];
    // setSubmittedData(dataArray);
    // setTodo("");
  }

  useEffect(() => {
    fetch("http://localhost:3001/todos")
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
       <h3>Todos</h3>
      <form onSubmit={handleSubmit}>
      <div>{submittedData.map((data) => data.name)}</div>
        <input type="text" placeholder="Start typing..." onChange={handleToDosChange} value={todo} />
        <button type="submit">Submit</button>
      </form>
      <ol>
       {listOfSubmissions} 
      </ol> 
    </div>
  );
}

export default Form;





// import React, { useState, useEffect } from 'react
// import { useParams } from "react-router-dom"
// import './index.css';
// // import Form from './Form';

// const TodoList = ({onDeleteToDo}) => {
//     const [todos, setTodos] = useState("");
//     const [todoList, setTodolist] = useState([])
//     // const { id } = useParams(); 

//     useEffect(() => {
//         fetch(`http://localhost:3001/todos`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             setTodolist(data)
//         })
//     }, [])
      
//     function handleChange(event) {
//         console.log(event.target.value)
//       }

//     function handleSubmit(event) {
//         event.preventDefault()
//         console.log("form submit")
        // fetch (`http://localhost:3001/todos`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({content:todos})
        // })
        // .then(r => r.text())
        // .then(data => {console.log(data)})
//     }

//    const listItems = todoList.map((todo, index) => <li>{todo.content}</li>);

//    const handleClick = () => {
//      alert("you clicked");
//    }

//     function onDeleteToDo() {
//       //console.log(event.target.value)
//     }

// //     function handleDelete() {
// //       fetch(`http://localhost:3001/todos`, {
// //         method: "DELETE",
// //       })
// //     .then(res => res.json())
// //     .then(() => onDeleteToDo(id))
// // }


//     return (
//         <div>
//             <hr></hr>
//           <h1>Todo List </h1>
//           <form onSubmit={handleSubmit} onChange={handleChange}>
//               <hr></hr>
//             <input type="text" placeholder="Add todo" value={todos} onChange={(event) => setTodos(event.target.value)} />
//             <button className="delete-task" onClick={() => handleClick()}  type="submit">Submit</button>
//           </form>
//           <ul>
//           {listItems}
//           </ul>
//         </div>
//       )
//     }
  


// export default TodoList

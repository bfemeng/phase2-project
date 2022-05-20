import React from 'react'
 
function Form({
    todoList,
    handleListChange
  }) {


  return (
    <form>
      <input type="text" onChange={handleListChange} value={todoList} />
      <button type="submit">Submit</button>
    </form>
  );
}


export default Form
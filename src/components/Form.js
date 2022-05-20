import React from 'react'
import {useState} from 'react'

function Form({handleSubmit}){
//    const [list, setList] = useState('')
const [formData, setFormData] = useState({
    list:'',
})

//    const changeList = (e) => {
//     setList(e.target.value)
//     }
  console.log(formData)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }
  return (
    <form onSubmit={(e) => handleSubmit(e, formData)} style={{display:"flex", flexDirection:"column", width:"400px", margin:"auto"}}>
        <label>List</label>
        <input
        type="text"
        name="list"
        aria-label="list"
        Value={formData.list}
        onChange={handleChange}
        ></input>
        <input type="submit" />
    </form>
  )
}

export default Form
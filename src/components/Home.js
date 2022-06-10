import React from 'react'
import Header from './Header'
import Taskgirl from '../images/TaskGirl.png'

const Home = () => {
  return (
    <div> 
        <Header/>
        <hr/>
        <p>This is a small business management app to help a retail business owner become better organized. </p>
        <p>Tasks and todo items can be added to a list and inventory items can be logged for better tracking. </p>
        <img src={Taskgirl} className="image" />
    </div>
  )
}

export default Home
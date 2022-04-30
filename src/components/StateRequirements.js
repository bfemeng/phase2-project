import React, { useState, useEffect } from 'react'

const StateRequirements = () => {
    useEffect(() => {
        fetch("http://localhost:3001/requirements")
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }, [])
  return (
    <div>StateRequirements</div>
  )
}

export default StateRequirements
import React from 'react'

const Dropdown = ({setStatus}) => {
  const statusHandler = (e) => {
    setStatus(e.target.value)
  }
  return (
    <div className="select" >
        <select onClick={statusHandler} name="todos" className="filter-todo">
          <option value="all" >All</option>
          <option value="completed" >completed</option>
          <option value="uncompleted" >uncompleted</option>
          
        </select>
      </div>
  )
}

export default Dropdown

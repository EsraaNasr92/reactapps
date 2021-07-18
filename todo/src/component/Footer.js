import React from 'react'

function Footer(){
  return(
    <div className="todo-footer">
    <div className="">5  items left</div>
    <div className="filter">
      <ul>
        <li><a href="#">All</a></li>
        <li><a href="#">Active</a></li>
        <li><a href="#">Completed</a></li>
      </ul>
    </div>
    <div className=""><a href="#">Clear Completed</a></div>
    </div>
  )
}

export default Footer
